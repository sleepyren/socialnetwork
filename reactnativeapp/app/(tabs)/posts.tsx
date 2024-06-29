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
      <CreatePost username='renny' profileImageLink='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlz28jP2IzULAruLKUf-NDVB_vV5QMlreGmA&s'/>
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

