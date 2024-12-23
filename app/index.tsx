import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function Index() {
  const router = useRouter();

  const handleSeeNearbyStations = () => {
    router.push('/Stations'); 
  };

  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={['#00C853', '#009688']} 
        style={styles.header}
      >
        <Text style={styles.title}>CycleGO</Text>
        <Text style={styles.welcomeMessage}>
          Bem-vindo ao CycleGO! Encontre bicicletas, explore a cidade e movimente-se com liberdade
        </Text>
      </LinearGradient>

      <View style={styles.middle}>
        <Image
          source={{ uri: 'https://via.placeholder.com/300x200' }}
          style={styles.image}
          resizeMode="cover"
          onError={(e) => console.log('Image load error:', e.nativeEvent.error)}
        />
        <TouchableOpacity style={styles.actionButton} onPress={handleSeeNearbyStations}>
          <Text style={styles.actionButtonText}>Ver estações próximas</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.achievements}>
          Você já explorou 3 estações diferentes. Descubra mais!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  welcomeMessage: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%', 
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#007BFF',
  },
  actionButton: {
    backgroundColor: '#00C853',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  actionButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  achievements: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
