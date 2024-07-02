import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { login } from "@/components/networking";
import { useState } from "react";
import { Button, TextInput, StyleSheet} from "react-native";
import { router, Link} from "expo-router";


export default function LoginScreen()
{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
    <ThemedView style={styles.background}>
    <ThemedText type="title" style = {styles.text}>Login to SocialNetwork</ThemedText>
    <TextInput placeholder="Enter username" onChangeText={setUsername} 
    style = {styles.inputs} />
    <TextInput placeholder="Enter password" onChangeText={setPassword}
    style = {styles.inputs}/>
    <Button title = "Submit" onPress={()=>{
        const routine = async ()=>{
        const res = await login(username, password);
        if (res.ok) router.replace('/(tabs)');
        }
        routine();

    }}/>
    </ThemedView>
    );

}
    const styles = StyleSheet.create({
        background : {flex: 1},
        inputs: {
            paddingBottom: 40,
            paddingTop: 40,
            width: "100%"
        },

        text: {
            paddingTop: 90,
            paddingBottom: 30,
            width: "90%"
        }

        
    })
