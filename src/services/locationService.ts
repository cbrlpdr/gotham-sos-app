import * as Location from 'expo-location';
import * as Device from 'expo-device';
import { Platform } from 'react-native';

export async function getCurrentLocation(): Promise<{ latitude: number; longitude: number } | null> {
  try {
    if (Platform.OS === 'android' && !Device.isDevice) {
      console.warn('Não funciona em emulador Android no Snack.');
      return null;
    }

    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      console.warn('Permissão negada para acessar localização.');
      return null;
    }

    let location = await Location.getCurrentPositionAsync({});
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  } catch (error) {
    console.error('Erro ao obter localização:', error);
    return null;
  }
}
