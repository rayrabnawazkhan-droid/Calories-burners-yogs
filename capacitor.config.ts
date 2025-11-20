import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.calories.yoga.app',
  appName: 'Calories 🔥 Yoga',
  webDir: 'dist', // If you use Create-React-App, change this to 'build'
  server: {
    androidScheme: 'https'
  },
  plugins: {
    // Allow http for development if needed, otherwise https is default
  }
};

export default config;