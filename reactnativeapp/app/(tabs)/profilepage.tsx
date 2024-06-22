import { ProfilePageFormat, ProfilePageProps } from "@/components/appUIElements/ProfilePageFormat";
import { TextPostProps, TextPost} from "@/components/appUIElements/TextPost";

export default function ProfilePage(){
    const textP : TextPostProps = {username: 'ren', text: 'This is \
    the body of the message! TEST TEST !',
        profileImageLink: "https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png",
        date: new Date().toLocaleString(), likes: 5
    }
    const testArray: TextPostProps[] = [
        { ...textP },   
        { ...textP, username: 'mario', likes: 10 },
        { ...textP, username: 'luigi', text: 'Luigi’s message!', date: new Date().toLocaleString(), likes: 15 , profileImageLink: 'https://pbs.twimg.com/profile_images/1265436085733093377/SCAoq66P_400x400.jpg'},
        { ...textP, username: 'peach', text: 'Peach’s message!', profileImageLink: "https://i.pinimg.com/736x/79/63/1a/79631a2cb68a1c202946c2f5044adabe.jpg" },
        { ...textP, username: 'toad', text: 'Toad’s message!', likes: 20, profileImageLink: 'https://static.wikia.nocookie.net/characterprofile/images/2/2d/Toad_Mario_Party_10.png'},
        { ...textP, username: 'yoshi', text: 'Yoshi’s message!', profileImageLink: "https://play.nintendo.com/images/profile-mk-yoshi.babe07bc.7fdea5d658b63e27.png" },
        { ...textP, username: 'bowser', text: 'Bowser’s message!', likes: 25 , profileImageLink: 'https://play.nintendo.com/images/profile-mk-bowser.7bf2a8f2.aead314d58b63e27.png'},
        { ...textP, username: 'daisy', text: 'Daisy’s message!', profileImageLink: "https://play.nintendo.com/images/profile-mk-daisy.6841986c.cf731f1358b63e27.png" },
      ];
      
const props : ProfilePageProps = {username: 'Renaldo',
 profilepiclink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxPOPGqxj4OiU0H_ikuhByPQgYcQHCJLXSQQ&s',
bio: 'Here is my bio. I am an interesting persoN! Here is my bio. I am an interesting persoN!', array: testArray}

return (<ProfilePageFormat {...props} />)

}