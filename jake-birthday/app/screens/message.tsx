import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function message() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.emoji}>🎉</Text>
      <Text style={styles.heading}>A Message For You</Text>
      <Text style={styles.body}>
        Wishing you the most wonderful birthday filled with joy, laughter, and all the things that make you smile.
        {'\n\n'}
        You are truly one of a kind, and the world is a better place with you in it.
        {'\n\n'}
        Here's to another amazing year ahead — Happy Birthday! 🥳
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 32, backgroundColor: '#fff8f0' },
  emoji: { fontSize: 56, marginBottom: 16 },
  heading: { fontSize: 26, fontWeight: 'bold', color: '#d45f2e', marginBottom: 20, textAlign: 'center' },
  body: { fontSize: 17, lineHeight: 28, color: '#444', textAlign: 'center' },
});