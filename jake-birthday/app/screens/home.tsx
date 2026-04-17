import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon'
import { useRef } from 'react';

export default function Home() {
        const confettiRef = useRef<any>(null);
  return (
    
      <ImageBackground
      source={require('../../assets/images/jakeappbackground.png')}
      style={styles.container}
      resizeMode="cover"
      >
        <ConfettiCannon
        ref={confettiRef}
        count={150}
        origin={{ x: -20, y: 0 }}
        autoStart={true}
        fadeOut={true}
      />
      <Image
        source={require('../../assets/images/jakeflushed.png')}
        style={{ width: 180, height: 180 }}
      />
      <Text style={styles.title}>JAKE BARUCH</Text>
      <Text style={styles.subtitle}>birthday app</Text>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff8f0' },
  emoji: { fontSize: 64 },
  title: { fontSize: 32, fontWeight: 'bold', marginTop: 16, color: '#1C7508' },
  subtitle: { fontSize: 16, color: '#888', marginTop: 8 },
});
