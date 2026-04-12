import { FlatList, Image, StyleSheet, Dimensions, View } from 'react-native';

const photos = [
  { id: '1', uri: 'https://picsum.photos/seed/bday1/400/400' },
  { id: '2', uri: 'https://picsum.photos/seed/bday2/400/400' },
  { id: '3', uri: 'https://picsum.photos/seed/bday3/400/400' },
  { id: '4', uri: 'https://picsum.photos/seed/bday4/400/400' },
];

const size = Dimensions.get('window').width / 2 - 6;

export default function gallery() {
  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.grid}
      renderItem={({ item }) => (
        <Image source={{ uri: item.uri }} style={{ width: size, height: size, margin: 2 }} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  grid: { padding: 4 },
});