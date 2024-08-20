import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveJwtToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('authToken', token);
  } catch (error) {
    console.error('Error saving JWT token:', error);
  }
};

export const getJwtToken = async () => {
  try {
    return await AsyncStorage.getItem('authToken');
  } catch (error) {
    console.error('Error retrieving JWT token:', error);
    return null;
  }
};

export const removeJwtToken = async () => {
  try {
    await AsyncStorage.removeItem('authToken');
  } catch (error) {
    console.error('Error removing JWT token:', error);
  }
};