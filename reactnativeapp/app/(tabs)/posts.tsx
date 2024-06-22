import { Image, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextPost, TextPostProps } from '@/components/appUIElements/TextPost';
import { CreatePost } from '@/components/appUIElements/CreatePost';

export default function TestScreen() {
const textP : TextPostProps = {username: 'ren', text: 'This is \
the body of the message! TEST TEST !',
    profileImageLink: "https://upload.wikimedia.org/wikipedia/en/a/a9/MarioNSMBUDeluxe.png",
    date: JSON.stringify(new Date()), likes: 5
} //.toLocaleString()
return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/kirby.png')}
          style={styles.reactLogo}
        />
      }>
      <TextPost {...textP}></TextPost>
      <TextPost {...textP}></TextPost>
      <TextPost {...textP}></TextPost>
      <TextPost {...textP}></TextPost>
      <TextPost {...textP}></TextPost>
      <TextPost {...textP}></TextPost>
      <TextPost {...textP}></TextPost>
      <TextPost {...textP}></TextPost>
      <CreatePost username='renny' profileImageLink='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4de5d57-ee3e-4896-8599-84e178f81a83/dfpv5eo-bf373fb0-4e84-4d4f-9e75-d7ba6dd458d9.jpg/v1/fill/w_1280,h_1280,q_75,strp/sonic_profile_picture__free_to_use__by_tyrannis1_dfpv5eo-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Y0ZGU1ZDU3LWVlM2UtNDg5Ni04NTk5LTg0ZTE3OGY4MWE4M1wvZGZwdjVlby1iZjM3M2ZiMC00ZTg0LTRkNGYtOWU3NS1kN2JhNmRkNDU4ZDkuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.hEOQiYvvwsvyPCpV7zXfqNSrJqvlaHkHVILWgbk2yI0'/>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

