import { GenericPost } from "./appUIElements/CreatePost";
const backendURL = process.env.EXPO_PUBLIC_BACKEND as string;

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

export async function savePost(post: GenericPost)
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