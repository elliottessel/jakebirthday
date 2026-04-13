import { FlatList, Image, Dimensions, Modal, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useState } from 'react';

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
        const [selected, setSelected] = useState<any>(null);
      
        return (
          <View style={{ flex: 1 }}>
            <FlatList
              data={photos}
              keyExtractor={(item) => item.id}
              numColumns={2}
              contentContainerStyle={styles.grid}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setSelected(item.source)}>
                  <Image source={item.source} style={{ width: size, height: size, margin: 2 }} />
                </TouchableOpacity>
              )}
            />
      
            <Modal visible={!!selected} transparent animationType="fade">
              <TouchableOpacity style={styles.modalBg} onPress={() => setSelected(null)}>
                <Image
                  source={selected}
                  style={styles.fullImage}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </Modal>
          </View>
        );
      }
      
      const styles = StyleSheet.create({
        grid: { padding: 4 },
        modalBg: {
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.9)',
          alignItems: 'center',
          justifyContent: 'center',
        },
        fullImage: {
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height * 0.85,
        },
      });