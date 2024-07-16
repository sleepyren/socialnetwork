import { Image, StyleSheet, Platform } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { TextPost, TextPostProps } from '@/components/appUIElements/TextPost';
import { useEffect } from 'react';
import { getAllPosts } from '@/components/networking';
import { postPropsToNativeComponent } from '@/components/renderTool';
import { useState } from 'react';
import { GenericPostProps } from '@/components/appUIElements/CreatePost';
import { isImagePost, isTextPost } from '@/components/renderTool';
import { idToProfileImageURL } from '@/components/networking';


export default function TestScreen() {

  
const [allPosts, setAllPosts] = useState<
(GenericPostProps | null)[]>([]);

useEffect(()=>{
  
  (async ()=>{
  const postProps = await getAllPosts(isTextPost, isImagePost);
  //console.log(posts);
  setAllPosts(postProps); })() 

}
,[]);

return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/kirby.png')}
          style={styles.reactLogo}
        />
      }>
        {allPosts.map((ele)=>postPropsToNativeComponent(ele, idToProfileImageURL))}

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

