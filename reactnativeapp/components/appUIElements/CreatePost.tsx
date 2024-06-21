import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { ThemedView } from "../ThemedView";
import { getImage, uploadImage, photoUriInfo } from "../ImageHandler";
import { Button, Switch } from "react-native";
import * as FileSystem from "expo-file-system"

const backendURL = process.env.EXPO_PUBLIC_BACKEND;

type GenericPost = {username: string, profileImageLink: string, text: string, date: string, 
    bodyImage?:string, likes: Number
};

function GrabPhotoForPost(setUri : Function){
const [clicked, setClicked] = useState(false);
const gallery =  <Button title = "Get photo from Gallery" onPress = {()=>setUri(getImage(true))}/>;
const takePhoto = <Button title = "Take photo with Camera" onPress = {()=>setUri(getImage(false))}/>;

const handleClick = () => {setClicked(clicked => !clicked)}
const showButtons = clicked ? gallery && takePhoto : undefined;

return (
    <ThemedView>   
!clicked && <Button title = "Add a photo" onPress = {handleClick}/>
{showButtons}
</ThemedView>

)

}

export function CreatePost(data: {username : string, profileImageLink: string})
{
    const [isImagePost, setPostType] = useState(false);
    const [text, setText] = useState("");
    const [uri, setUri] = useState<null|photoUriInfo>(null);
    const [isUploading, setIsUploading] = useState(false);


    const passedUriFunc = (uri : photoUriInfo|null) => setUri(uri);
    const photoelement = isImagePost ? GrabPhotoForPost(passedUriFunc) : undefined;
    //const [imageUpload, setImageUpload] = useState();

    const toggleUploadState = () => {setIsUploading(state=>!state)};
    const submission = async () => {

        if (isImagePost && uri == null)
            {alert("Image Choice Failure"); return;}

        let response = null;
        if (isImagePost) response = await uploadImage((uri?.uri as string), 
            backendURL as string, toggleUploadState);
        let postObj : GenericPost = {username: data.username, profileImageLink: data.profileImageLink, text: text, 
            date: new Date().toISOString(), likes: 0}
        
        if (isImagePost)
            {
                if (response != null) //if success
                    postObj.bodyImage= (response as any).headers["imgurl"];
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


            response = await fetch(backendURL + "/save/", {
                method: "POST",
                body: JSON.stringify(postObj),
            })
            //finally submit Post Obj altogether 
            //and also create an endpoint to delete 
            //if the image was uploaded but the post upload failed

            
            if (!response.ok &&!(uri?.chosenPhoto as boolean) )
            {
                //fetch(backendURL + /deleteimg/, {method: "POST"})

            }



    }

    return (
        <ThemedView>
        <Switch value = {isImagePost} onValueChange={()=>{setPostType(value => !value)}}/>
        {photoelement}
        <TextInput placeholder="Text of Post" onChangeText={setText}/>
        </ThemedView>
    )
}