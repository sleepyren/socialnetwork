import { ThemedView, ThemedViewProps } from "../ThemedView";
import { ThemedText, ThemedTextProps } from "../ThemedText";
import { Image, StyleSheet, View } from "react-native";

export type imagePostProps = {username: string, date: Date, likes: Number,
     imagePostLink: string, profileImageLink: string, bodyImage: string
};

//NOTE: Remember to add styles for the profile and post images

export function ImagePost(props: imagePostProps)
{
//remember to add props for the views like in textpost
    return (
        <ThemedView  >
            <View style={styles.headerview}>

        <ThemedText style= {styles.username}>{props.username}</ThemedText>
        <Image source={{uri: props.profileImageLink}} style = {styles.profileImage}/>
        </View>
        <Image source = {{uri: props.bodyImage}}/>

        <ThemedText > Likes : {String(props.likes)}    
    Date: {String(props.date)}</ThemedText>
    </ThemedView>
    )
}

const styles = StyleSheet.create({

    container: {

        width: '100%',
        height: 200,
        flexDirection: 'column',
        paddingTop: '3%',
        paddingBottom: '5%',
    },

    headerview: {
        flex: 1,
        height: 40,
        width: 350,
        position: 'relative',
        padding: '5%',

    },

    profileImage: {
        width: 40,
        height: 40,
        position: 'absolute',
        top: 0,
        right: 0,
        borderRadius: 20,
        overflow: 'hidden'
    },

    username: {
        position: 'absolute',
        top:0,
        left: 0,

        flex: 1
    },

    footerview: {
        position: 'relative',
        flex: 1
    },

    likes: {
        position: 'absolute',
        bottom: 0,
        left: 0
    },

    date: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },

    body: {
        flex: 3,
        paddingTop: '4%',
        paddingBottom: '4%'
    }

})