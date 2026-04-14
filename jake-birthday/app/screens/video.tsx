import { View, StyleSheet, Text } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

export default function VideoScreen() {
//   const player = useVideoPlayer(
//     require('../../assets/videos/birthday.mp4'),
//     (player) => {
//       player.loop = false;
//       player.play();
//     }
//   );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Remember this</Text>
      {/* <VideoView
        player={player}
        style={styles.video}
        allowsFullscreen
        allowsPictureInPicture
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff8f0' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#d45f2e', marginBottom: 20 },
  video: { width: '100%', height: 300 },
});