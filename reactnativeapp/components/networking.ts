import { GenericPostProps } from "./appUIElements/CreatePost";
export const backendURL = process.env.EXPO_PUBLIC_BACKEND as string;


export async function login(username: string, password: string) : Promise<Response>
{
    const encoded = new URLSearchParams();
    encoded.append("username", username);
    encoded.append("password", password)

    return fetch(backendURL + "/login", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    credentials: "include",
    body: encoded.toString(),
});
}

export async function savePost(post: GenericPostProps)
{
    return fetch(backendURL + "/save", {
        method: "POST",
        body: JSON.stringify(post),
        headers : {
            "Content-Type" : "application/json"
        },
        credentials: "include"

    })
}

export async function getUserDetails()
{
    return fetch(backendURL + "/userdetails", {
        method: "GET",
        credentials: "include"
    })
}

export async function deleteImageFromDatabase(id : number)
{
    return fetch(backendURL + "/deleteimg", {method: "POST",
        body: String(id)});

}

export async function getAllPosts(isTextPost : (obj : GenericPostProps)=> boolean,
isImagePost: (obj: GenericPostProps)=> boolean)
{
    const response = await fetch(backendURL + "/allposts", {
        method: "GET",
        credentials: "include",
    })

console.log(response);

    const json : {profileImageId: number, post: Object}[]  = await response.json();
    //backend returns {post: "postdetails", profileImageId: number}
    //mutate so that profileImageId is within same obj for frontend
    console.log("json");
    console.log(json);
    const mutatedJSON = json.map((ele) : GenericPostProps | null => {
        
        const mutatedPost = {...ele.post, profileImageId : ele.profileImageId} as GenericPostProps;
        if (!( isImagePost(mutatedPost) || isTextPost(mutatedPost)) ) return null;

        return mutatedPost}
     );

    //console.log(json);
    return mutatedJSON;
    
}


export function idToProfileImageURL(id : number) : string 
{
return backendURL + "/img/" + id;
}
