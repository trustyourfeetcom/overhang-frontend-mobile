import { postRequest } from '../utils/httpClient';
import { saveJwtToken } from '../utils/jwtToken';

export const loginUser = async (username: string, password: string) => {
    try {
      const data = await postRequest('/api/auth/sessions', { username, password });
  
      if (data.token) {
        await saveJwtToken(data.token);
      }
  
      return data;
    } catch (error) { 
      console.error('Registration failed:', error);
      throw error;
    }
  };
  

export const registerUser = async (username: string, email: string, password: string) => {
  try {
    const data = await postRequest('/api/auth/accounts', { username, email, password });

    if (data.token) {
      await saveJwtToken(data.token);
    }

    return data;
  } catch (error) { 
    console.error('Registration failed:', error);
    throw error;
  }
};
