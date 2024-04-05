import { ExpoConfig } from 'expo/config'
import 'ts-node/register' // Add this to import TypeScript files

// In SDK 46 and lower, use the following import instead:
// import { ExpoConfig } from '@expo/config-types';

const config: ExpoConfig = {
  name: 'my-app',
  slug: 'my-app',
  plugins: ['expo-router'],
}

export default config
