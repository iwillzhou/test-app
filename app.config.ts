import 'ts-node/register';
import { ExpoConfig } from 'expo/config';

const appIdSuffix = process.env.APP_ENV === 'production' ? '' : `.${process.env.APP_ENV}`;

const config: ExpoConfig = {
    name: 'test-app',
    slug: 'test-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    splash: {
        image: './assets/images/splash.png',
        resizeMode: 'contain',
        backgroundColor: '#ffffff'
    },
    ios: {
        supportsTablet: true,
        bundleIdentifier: `com.test.myapp${appIdSuffix}`
    },
    android: {
        adaptiveIcon: {
            foregroundImage: './assets/images/adaptive-icon.png',
            backgroundColor: '#ffffff'
        },
        package: `com.test.myapp${appIdSuffix}`
    },
    web: {
        bundler: 'metro',
        output: 'static',
        favicon: './assets/images/favicon.png'
    },
    plugins: ['expo-router'],
    experiments: {
        typedRoutes: true
    },
    updates: {
        url: 'https://u.expo.dev/58154bdd-70ab-49f4-8c0b-cd74e32e3370'
    },
    runtimeVersion: {
        policy: 'appVersion'
    },
    extra: {
        eas: {
            projectId: '58154bdd-70ab-49f4-8c0b-cd74e32e3370'
        }
    }
};

export default config;
