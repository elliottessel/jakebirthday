import { FlatList, Image, StyleSheet, Dimensions, View } from 'react-native';

const photos = [
        { id: '1', source: require('../../assets/images/IMG_0472.png') },
        { id: '2', source: require('../../assets/images/IMG_0475.png') },
        { id: '3', source: require('../../assets/images/IMG_0950.png') },
        { id: '4', source: require('../../assets/images/IMG_1679.png') },
        { id: '5', source: require('../../assets/images/IMG_1679.png') },
        { id: '6', source: require('../../assets/images/IMG_2130.png') },
        { id: '7', source: require('../../assets/images/IMG_2561.png') },
        { id: '8', source: require('../../assets/images/IMG_4151.png') },
        { id: '9', source: require('../../assets/images/IMG_5958.png') },
        { id: '10', source: require('../../assets/images/IMG_5961.png') },
        { id: '11', source: require('../../assets/images/IMG_7984.png') },
        { id: '12', source: require('../../assets/images/IMG_9399.png') },
];

const size = Dimensions.get('window').width / 2 - 6;

export default function Gallery() {
  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.grid}
      renderItem={({ item }) => (
        <Image source={item.source} style={{ width: size, height: size, margin: 2 }} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  grid: { padding: 4 },
});