import { ThemedView } from "../ThemedView";
import { ThemedText} from "../ThemedText";
import { Image, StyleSheet, View } from "react-native";


export type imagePostProps = {username: string, date: string, likes: Number,
  profileImageId: number, bodyImageId: number, text?: string
};



//NOTE: Remember to add styles for the profile and post images

export function ImagePost(props: imagePostProps & ({imgLink : (ele : number)=>string}) )
{
//remember to add props for the views like in textpost
    console.log( props.imgLink(props.bodyImageId))
    return (
        <ThemedView style={styles.container} >
            <View style={styles.headerview}>

        <ThemedText style= {styles.username} type='title' >{props.username}</ThemedText>
        <Image source={{uri: props.imgLink(props.profileImageId)}} style = {styles.profileImage}/>
        </View>
        
        
        <View style={styles.body}>
        <Image source = {{uri: props.imgLink(props.bodyImageId)}} style={styles.bodyImage} />
        {props.text && <ThemedText type="default" style = {styles.bodyText}>{props.text}</ThemedText>}

        </View>

        <View style = {styles.footerview}>

    <ThemedText type ={'subtitle'} style = {styles.likes}> Likes : {String(props.likes)}  </ThemedText>
    <ThemedText type ={'subtitle'} style ={styles.date}>{props.date} </ThemedText>
    </View>

    </ThemedView>
    )
}

const styles = StyleSheet.create({

    container: {

        width: '100%',
        height: 400,
        flexDirection: 'column',
        paddingTop: '3%',
        paddingBottom: '5%',
    },

    headerview: {
        flex: .4,
        height: 40,
        width: 350,
        position: 'relative',


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
        flex: 2,
        paddingTop: '4%',
        paddingBottom: '4%',
        width: '100%',

    },

    bodyImage: {

        width : '100%',
        height: '100%',


        resizeMode: 'cover',

    },

    bodyText: {

 marginTop: 10, // Space between image and text
    width: '100%', // Ensure text takes up full width
    }
})