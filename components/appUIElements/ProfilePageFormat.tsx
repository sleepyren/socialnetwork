import { ReactNode } from "react"
import { ThemedText } from "../ThemedText"
import { ThemedView } from "../ThemedView"
import { Image, StyleSheet, SafeAreaView, FlatList, View} from "react-native"
import { TextPostProps, TextPost} from "./TextPost"


export type ProfilePageProps = {
    profilepiclink: string,
    username: string,
    bio: string,
    array: Array<TextPostProps>
}

export function ProfilePageFormat(props: ProfilePageProps)
{
return (

<SafeAreaView style= {styles.screen}>
    <ThemedView>


    <FlatList data = {props.array} renderItem={({item, index})=>
    
    <View style = {styles.list}>

    <TextPost {...item} key={index}/>  
    </View>

    }
ListHeaderComponent={()=>
<ThemedView>
<ThemedView style = {styles.top}>
<Image source = {{uri: props.profilepiclink}} style= {styles.profilepic}/>
<ThemedText {...{type: 'title'}} style={styles.username}>{props.username}</ThemedText>
</ThemedView>
<ThemedView style= {styles.bio}>
<ThemedText {...{type: 'default'}} style={{paddingTop:10, paddingBottom:10}}>{props.bio}</ThemedText>
</ThemedView>

</ThemedView>

}
/>
</ThemedView>
    </SafeAreaView>)




}

const styles = StyleSheet.create(
{
    screen: {
        flex: 1
    },

    top: {
        paddingTop: '5%',
        paddingBottom: '5%',
        position: 'relative',
        width: '100%',
        height: 150
    },

    profilepic: {
        position: 'absolute',
        top: 30,
        left: 50,
        borderRadius: 75,
        height: 100,
        width: 100,
    },
    username:{
        position: 'absolute',
        top:40,
        right:20
    },
    bio: {
        alignContent: 'center',
        paddingTop: '3%',
        paddingBottom: '3%',
        paddingLeft: 16,
        paddingRight: 16
    },
    list: {
        paddingLeft: 16,
        paddingRight: 16,
    }

}
)