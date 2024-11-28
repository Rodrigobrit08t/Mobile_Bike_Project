/*
import React, { useRef, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Alert } from 'react-native';
import { Camera, BarcodeScanningResult} from 'expo-camera';
import { CameraType } from 'expo-camera/build/legacy/Camera.types';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const cameraRef = useRef<Camera | null>(null);

  // Request permissions when the component is mounted
  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = (result: BarcodeScanningResult) => {
    setScanned(true);
    Alert.alert('QR Code Scanned', `Data: ${result.data}`, [
      { text: 'OK', onPress: () => setScanned(false) },
    ]);
  };

  if (hasPermission === null) {
    return <SafeAreaView><Text>Requesting camera permission...</Text></SafeAreaView>;
  }

  if (hasPermission === false) {
    return <SafeAreaView><Text>No access to camera</Text></SafeAreaView>;
  }

  return (
    <SafeAreaView style={StyleSheet.absoluteFillObject}>
      <Camera
        ref={cameraRef}
        style={StyleSheet.absoluteFillObject}
        type={CameraType.back}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      />
    </SafeAreaView>
  );
}
*/
