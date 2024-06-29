import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";

const OPTIONS : ImagePicker.ImagePickerOptions = {
    allowsEditing: true,
    quality: 0.5,
    allowsMultipleSelection: false,
    mediaTypes: ImagePicker.MediaTypeOptions.Images
}
const MAX_SIZE = 7 * 1024 * 1024; // 7 MB is the limit on my spring server
export type photoUriInfo = {uri: string, chosenPhoto: boolean};


export const getImage = async (choosePhoto : boolean)  => {
    //ask OS for permission
    let result;
    if (choosePhoto) //if we are choosing from the library
        {

        const hasPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!hasPermission.granted) 
            {
            alert("Permission to access camera library is necessary!");
            return null;
            }
            let isImageValid = false;
            result = await ImagePicker.launchImageLibraryAsync(OPTIONS);
            /*
            while (!isImageValid)
                {
                result = await ImagePicker.launchImageLibraryAsync(OPTIONS);
                if (result.canceled) break;
                let isImageValid = checkImageSize(result.assets[0].uri)
                }*/
        }
    else //else use the camera to take a picture
    {
        const hasPermission = await ImagePicker.requestCameraPermissionsAsync();
        if (!hasPermission.granted)
            {
            alert("Permission to access camera is necessary!");
            return null;
            }
            result = await ImagePicker.launchCameraAsync(OPTIONS);
    }

    if (result && !result.canceled) return {uri: result.assets[0].uri, chosenPhoto: choosePhoto}

    return null;
}

export const uploadImage = async (uri: string, serverURL : string, changeLoadingState: Function) =>
    {
        //change loading state should be a function that changes the loading state
        changeLoadingState();
        try{

            const res = await FileSystem.uploadAsync(serverURL + "/imgupload"
            , uri, {
                httpMethod: "POST",
            uploadType: FileSystem.FileSystemUploadType.MULTIPART,
            fieldName: "file" //The name of the field which will hold uploaded file. 
            //Defaults to the file name without an extension.
                    });
        changeLoadingState();
        console.log("img upload response body", res.body);
    return Number(res.body);
    }
    catch (error){
        changeLoadingState();
        alert(error);
        return -1;
    }

    }

    async function checkImageSize(uri : string) : Promise<boolean> {
        const fileInfo = await FileSystem.getInfoAsync(uri, {size: true});
    
        if (fileInfo.exists && fileInfo.size > MAX_SIZE) {
            alert('The file size is too large. Please select a smaller file.');
            return false;
        } else {
            console.log('Image is within the size limit. Proceed with upload or further processing.');
            return true;
        }
    }


const FullyAddImage = async (choosePhoto: boolean, serverURL: string,
     changeLoadingState: Function) => {
    const imageURI : null | {uri : string, chosenPhoto: boolean} = await getImage(choosePhoto);

    if (!imageURI) return;
    
    await uploadImage(imageURI.uri, serverURL, changeLoadingState);

    //if we just took this photo then delete it because we just uploaded
    //it to my database

    if (!choosePhoto) await FileSystem.deleteAsync(imageURI.uri);

}
