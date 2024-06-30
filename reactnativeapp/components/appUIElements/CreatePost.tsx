import { useEffect, useState } from "react";
import { ThemedView } from "../ThemedView";
import { getImage, uploadImage, photoUriInfo } from "../ImageHandler";
import { Button, Switch, Text, TextInput} from "react-native";
import * as FileSystem from "expo-file-system"
import * as SecureStore from 'expo-secure-store';


const backendURL = process.env.EXPO_PUBLIC_BACKEND as string;

type GenericPost = {username: string, profileImageLink: string, text: string, date: string, 
    bodyImage?:string, likes: Number
};

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

export function CreatePost(data: {username : string, profileImageLink: string})
{
    const [isImagePost, setPostType] = useState(true);
    const [text, setText] = useState("");
    const [uri, setUri] = useState<null|photoUriInfo>(null);
    const [isUploading, setIsUploading] = useState(false);


    const passedUriFunc = (uri : photoUriInfo|null) => setUri(uri);
    const photoelement = GrabPhotoForPost(passedUriFunc, isImagePost);
    //const [imageUpload, setImageUpload] = useState();

    const toggleUploadState = () => {setIsUploading(state=>!state)};
    
    const login = async ()=>{
        const payload = JSON.stringify({username: "renny", password: "Imhere"});
        console.log(payload);
        const encoded = new URLSearchParams();
        encoded.append("username", "renny");
        encoded.append("password", "Imhere")
        const res2 = await fetch(backendURL + "/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        credentials: "include",
        body: encoded.toString(),
    });
        console.log(res2);

        console.log('Login Result:', res2.headers.get("Set-Cookie"));
        console.log(await fetch(backendURL +  "/printall", {
            method: "GET",
            credentials: "include"
        }))
    //console.log(await SecureStore.getItemAsync("session"))
    //SecureStore.setItemAsync("session", body.get("Set-Cookie") as string)

    console.log(await res2.json());
    
    };
    useEffect(()=>{
        login()} ,[]);
    const submission = async () => {

        if (isImagePost && uri == null)
            {alert("Image Choice Failure"); return;}

        let response = null;
        let postObj : GenericPost = {username: data.username, profileImageLink: data.profileImageLink, text: text, 
            date: new Date().toISOString(), likes: 0}
        
            let id = -1;
        if (isImagePost)
            {
                id = await uploadImage((uri?.uri as string), 
        backendURL as string, toggleUploadState);

                if (id >= 0) //if success
                    postObj.bodyImage = backendURL + "/img/" + id;
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


            response = await fetch(backendURL + "/save", {
                method: "POST",
                body: JSON.stringify(postObj),
                headers : {
                    "Content-Type" : "application/json"
                }

            })
            //finally submit Post Obj altogether 
            //and also create an endpoint to delete 
            //if the image was uploaded but the post upload failed

            console.log(response);
            if (!response.ok && id >=0 )
            {
                fetch(backendURL + "/deleteimg", {method: "POST",
                    body: String(id)
                });
            }



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