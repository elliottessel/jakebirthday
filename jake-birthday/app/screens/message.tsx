import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Message() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>A Message for my absolutely goated 22 year old day-one.</Text>
      <Text style={styles.body}>
        I know I said I don't want to reiterate some of that W friendslop, but here I am.
        {'\n\n'}
        I don't know what I would do without you in my life. You push me to be a better person; I would probably be shite at giving gifts without you, but
        instead I'm out here making apps. 
        {'\n\n'}
        But anyway, I love you so much and I can't wait for another peak year for Jakelliot.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', justifyContent: 'center', padding: 32, backgroundColor: '#fff8f0' },
  emoji: { fontSize: 56, marginBottom: 16 },
  heading: { fontSize: 26, fontWeight: 'bold', color: '#1C7508', marginBottom: 20, textAlign: 'center' },
  body: { fontSize: 17, lineHeight: 28, color: '#444', textAlign: 'center' },
});