import {  useState } from "react";
import { ThemedView } from "../ThemedView";
import { getImage, uploadImage, photoUriInfo } from "../ImageHandler";
import { Button, Switch, Text, TextInput} from "react-native";
import { login, savePost, deleteImageFromDatabase } from "../networking";
import * as FileSystem from "expo-file-system"
import * as SecureStore from 'expo-secure-store';


const backendURL = process.env.EXPO_PUBLIC_BACKEND as string;

export type GenericPostProps = {username: string, profileImageId?: number, text?: string, date: string, 
    bodyImageId?: number, id?: number, likes?: number, imgLink?: (ele : number)=>string } ;

function GrabPhotoForPost(setUri : Function, render: boolean){
const [clicked, setClicked] = useState(false);
const gallery =  <Button title = "Get photo from Gallery" onPress = {async ()=>setUri(await getImage(true))}
key = "1"/>;
const takePhoto = <Button title = "Take photo with Camera" onPress = {async ()=>setUri(await getImage(false))}
key = "2" />;

const handleClick = () => {setClicked(clicked => !clicked)}
const showButtons = clicked ? [gallery, takePhoto] : undefined;

return (
    render && <ThemedView>   
{!clicked && <Button title = "Add a photo" onPress = {handleClick}/>}
{showButtons}
</ThemedView>

)

}

export function CreatePost(data: {username : string, profileImageId: number})
{
    const [isImagePost, setPostType] = useState(true);
    const [text, setText] = useState("");
    const [uri, setUri] = useState<null|photoUriInfo>(null);
    const [isUploading, setIsUploading] = useState(false);


    const passedUriFunc = (uri : photoUriInfo|null) => setUri(uri);
    const photoelement = GrabPhotoForPost(passedUriFunc, isImagePost);
    //const [imageUpload, setImageUpload] = useState();

    const toggleUploadState = () => {setIsUploading(state=>!state)};
    
    const submission = async () => {

        if (isImagePost && uri == null)
            {alert("Image Choice Failure"); return;}


        //fix
        let response = null;
        let postObj : GenericPostProps = {username: data.username, profileImageId: data.profileImageId, text: text, 
            date: new Date().toISOString()}
        
            let id = -1;
        if (isImagePost)
            {
                id = await uploadImage((uri?.uri as string), 
        backendURL as string, toggleUploadState);

                if (id >= 0) //if success
                    postObj.bodyImageId = id;
                else //if failed reset state and cache
                {
                    //if this was a photo not selected from the file system
                    //i.e. i took this photo with the camera wrapper
                    if (!(uri?.chosenPhoto as boolean)) 
                        await FileSystem.deleteAsync(uri?.uri as string)

                    setText(""); setUri(null);
                    return;
                }    
            }


            response = await savePost(postObj);
            //finally submit Post Obj altogether 
            //and also create an endpoint to delete 
            //if the image was uploaded but the post upload failed

            console.log(response);
            if (!response.ok && id >=0 )
                deleteImageFromDatabase(id);
            



    }

    return (
        <ThemedView>
        <Switch value = {isImagePost} onValueChange={()=>{setPostType(value => !value)}}/>
        {photoelement}
        {isUploading ? <Text>isUploading</Text>:<Text>Not Uploading</Text> }
        <TextInput placeholder="Text of Post" onChangeText={setText}/>
        <Button title="Submit" onPress={submission}/>
        </ThemedView>
    )
}