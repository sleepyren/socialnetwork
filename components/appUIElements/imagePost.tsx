import { ThemedView, ThemedViewProps } from "../ThemedView";
import { ThemedText, ThemedTextProps } from "../ThemedText";
import { Image } from "react-native";

export type imagePostProps = {username: string, date: Date, likes: Number,
     imagePostLink: string, viewprops: ThemedViewProps, usernameprops: ThemedTextProps, 
     footerprops: ThemedTextProps, profileImageLink: string
};

//NOTE: Remember to add styles for the profile and post images

export function ImagePost(props: imagePostProps)
{

    return (
        <ThemedView {...props.viewprops} >
        <ThemedText {...props.usernameprops}>{props.username}</ThemedText>
        <Image source={{uri: props.profileImageLink}}/>
        <Image source = {{uri: props.profileImageLink}}/>

        <ThemedText {...props.footerprops}> Likes : {String(props.likes)}    
    Date: {String(props.date)}</ThemedText>
    </ThemedView>
    )
}