import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome } from '@expo/vector-icons';

export default function Stations() {
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Permissão de localização negada');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  if (!location) {
    return <Text>Carregando mapa...</Text>;
  }

  return (
    <View style={styles.container}>
      {/* Mapa Centralizado */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        showsUserLocation={true}
      >
        {/* Exemplo de Marker para uma estação */}
        <Marker
          coordinate={{ latitude: location.latitude + 0.001, longitude: location.longitude + 0.001 }}
          title="Estação de Bicicletas"
          description="10 bicicletas disponíveis"
        />
      </MapView>

      {/* Botão de Localizar Estação Mais Próxima */}
      <TouchableOpacity style={styles.button} onPress={() => console.log('Localizar estação mais próxima')}>
        <FontAwesome name="location-arrow" size={24} color="white" />
        <Text style={styles.buttonText}>Estação Próxima</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 40,
    right: 20,
    backgroundColor: '#00C853',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
  },
});