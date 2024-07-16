import { ThemedView, ThemedViewProps } from "../ThemedView";
import { ThemedText, ThemedTextProps } from "../ThemedText";
import { Image, StyleSheet, View} from "react-native";


export type TextPostProps = {username: string, text: string, date: string, likes: number,
    profileImageId: number, id?: number
};


export function TextPost(props: TextPostProps & ({imgLink : (ele : number)=>string}))
{
    
    const usernameprops : ThemedTextProps = {type : 'title'} 
    const likesprops : ThemedTextProps = {type: 'subtitle'}
    const bodyprops: ThemedTextProps = {type: 'default'}
    const dateprops: ThemedTextProps = {type: 'subtitle'}

return (
    <ThemedView  style = {styles.container}>
    <View style= {styles.headerview}>
    <ThemedText {...usernameprops} style= {styles.username}>{props.username }</ThemedText>
    <Image source={{uri: props.imgLink(props.profileImageId) }} style = {styles.profileImage}/>
    </View>
    <ThemedText {...bodyprops} style = {styles.body}>
    {props.text}
    </ThemedText>
    <View style = {styles.footerview}>

    <ThemedText {...likesprops} style = {styles.likes}> Likes : {String(props.likes)}  </ThemedText>
    <ThemedText {...dateprops} style ={styles.date}>{props.date} </ThemedText>
    </View>

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
        flex: .5,
        height: 40,
        width: 350,
        position: 'relative',
    paddingBottom: '2%',
    paddingTop: '2%'

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
        flex: .5
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