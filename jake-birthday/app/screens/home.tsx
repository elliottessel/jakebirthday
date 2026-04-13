import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🎂</Text>
      <Text style={styles.title}>Happy Birthday!</Text>
      <Text style={styles.subtitle}>Tap the tabs below to explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff8f0' },
  emoji: { fontSize: 64 },
  title: { fontSize: 32, fontWeight: 'bold', marginTop: 16, color: '#d45f2e' },
  subtitle: { fontSize: 16, color: '#888', marginTop: 8 },
});
