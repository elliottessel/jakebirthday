import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

export default function VideoScreen() {
  const player = useVideoPlayer(
    require('../../assets/Jake Birthday.mp4'),
    (player) => {
      player.loop = false;
      player.play();
    }
  );

  return (
    <ImageBackground
    source={require('../../assets/images/videobacgkround.png')}
    style={styles.container}
    resizeMode="cover"
    >
      <Text style={styles.title}>EVERYONE IS HERE!</Text>
      <VideoView
        player={player}
        style={styles.video}
        allowsFullscreen
        allowsPictureInPicture
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff8f0' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1C7508', marginBottom: 20 },
  video: { width: '100%', height: 300 },
});