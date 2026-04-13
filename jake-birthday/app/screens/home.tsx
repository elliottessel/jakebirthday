import { View, Text, StyleSheet } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon'
import { useRef } from 'react';

export default function Home() {
        const confettiRef = useRef<any>(null);
  return (
    <View style={styles.container}>
        <ConfettiCannon
        ref={confettiRef}
        count={150}
        origin={{ x: -20, y: 0 }}
        autoStart={true}
        fadeOut={true}
      />
      <Text style={styles.emoji}>🎂</Text>
      <Text style={styles.title}>JAKE BARUCH</Text>
      <Text style={styles.subtitle}>birthday app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff8f0' },
  emoji: { fontSize: 64 },
  title: { fontSize: 32, fontWeight: 'bold', marginTop: 16, color: '#d45f2e' },
  subtitle: { fontSize: 16, color: '#888', marginTop: 8 },
});
