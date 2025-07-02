// config.js
import Constants from 'expo-constants';

const extra =
  Constants.expoConfig?.extra ??
  Constants.getExpoConfig()?.expo?.extra ??
  {};

export const UNSPLASH_ACCESS_KEY = extra.unsplashAccessKey;

