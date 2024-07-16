import { ProfilePageFormat, ProfilePageProps } from "@/components/appUIElements/ProfilePageFormat";
import { TextPostProps, TextPost} from "@/components/appUIElements/TextPost";
import { View } from "react-native";
import { CreatePost } from "@/components/appUIElements/CreatePost";
import { useEffect, useState } from "react";


export default function ProfilePage(){

    const [userDetails, setUserDetails] = useState<{username : String, profileImageId: number}>();
      
const props : ProfilePageProps = {username: 'Renaldo',
 profilepiclink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPOPGqxj4OiU0H_ikuhByPQgYcQHCJLXSQQ&s',
bio: 'Here is my bio. I am an interesting persoN! Here is my bio. I am an interesting persoN!', array: []}

useEffect(,[]);

return (
<View>
<ProfilePageFormat {...props} />
<CreatePost username="renny" profileImageId={1}/>
</View>

)

}