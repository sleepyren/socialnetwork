import { ThemedView, ThemedViewProps } from "../ThemedView";
import { ThemedText, ThemedTextProps } from "../ThemedText";
import { Image } from "react-native";

export type imagePostProps = {username: string, date: Date, likes: Number,
     imagePostLink: string, profileImageLink: string, bodyImage: string
};

//NOTE: Remember to add styles for the profile and post images

export function ImagePost(props: imagePostProps)
{
//remember to add props for the views like in textpost
    return (
        <ThemedView  >
        <ThemedText >{props.username}</ThemedText>
        <Image source={{uri: props.profileImageLink}}/>
        <Image source = {{uri: props.profileImageLink}}/>

        <ThemedText > Likes : {String(props.likes)}    
    Date: {String(props.date)}</ThemedText>
    </ThemedView>
    )
}