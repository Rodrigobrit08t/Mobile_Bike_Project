import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';

export default function BikeScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const isPermissionGranted = Boolean(permission?.granted);
  const router = useRouter(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CycleGO</Text>
      <Text style={styles.subtitle}>Escaneie o QR code para liberar sua bicicleta!</Text>

      <View style={styles.buttonContainer}>
        <Pressable onPress={requestPermission} style={styles.button}>
          <Text style={styles.buttonText}>
          Solicitar permissões de câmera</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push('./Scanner')}
          disabled={!isPermissionGranted}
          style={[styles.button, { opacity: isPermissionGranted ? 1 : 0.5 }]}
        >
          <Text style={styles.buttonText}>Escanear QR Code</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
  button: {
    backgroundColor: '#00C853',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
