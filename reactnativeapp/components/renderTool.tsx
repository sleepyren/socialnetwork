import { ImagePost, imagePostProps } from "./appUIElements/imagePost";
import { TextPostProps , TextPost} from "./appUIElements/TextPost";
import { GenericPostProps } from "./appUIElements/CreatePost";


export function postPropsToNativeComponent(obj :GenericPostProps | null, imgLink:(ele: number) => string)
 : JSX.Element | null
{

            
            if (isImagePost(obj))
                {
                    return <ImagePost {...obj} imgLink = {imgLink} key={obj.id}/>;
                }
                else if (isTextPost(obj))
                    {

                    return <TextPost {...obj} imgLink = {imgLink} key={obj.id}/>;
                }

                else
                return null;

}

export function isTextPost(obj: any): obj is TextPostProps{

    console.log("text  ")
    console.log(obj)
    const textBool = typeof obj.text === "string";
    const idBool = typeof obj.id === "number";
    const usernameBool = typeof obj.username === "string";
    const likesBool = typeof obj.likes === "number";
    const profileImageBool = typeof obj.profileImageId === "number";
    return usernameBool && likesBool && profileImageBool && idBool && textBool;

}

export function isImagePost(obj: any): obj is imagePostProps{
    console.log("image  ")
    console.log(obj)
    const idBool = typeof obj.id === "number";
    const hasBodyImage = "bodyImageId" in obj;
    const usernameBool = typeof obj.username === "string";
    const likesBool = typeof obj.likes === "number";
    const bodyImageBool = typeof obj.bodyImageId === "number";
    const profileImageBool = typeof obj.profileImageId === "number";
    return usernameBool && likesBool && idBool
    && bodyImageBool && profileImageBool && hasBodyImage;

}