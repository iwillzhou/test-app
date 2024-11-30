import 'ts-node/register';
import { ExpoConfig } from 'expo/config';

const isProduction = process.env.APP_ENV === 'production';

const appNameSuffix = isProduction ? '' : `(${process.env.APP_ENV})`;
const appIdSuffix = isProduction ? '' : `.${process.env.APP_ENV}`;

const version = '1.0.0';

const config: ExpoConfig = {
    name: `test-app${appNameSuffix}`,
    slug: 'test-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
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
    plugins: [
        'expo-router',
        [
            'expo-splash-screen',
            {
                image: './assets/images/splash-icon.png',
                imageWidth: 200,
                resizeMode: 'contain',
                backgroundColor: '#ffffff'
            }
        ]
    ],
    experiments: {
        typedRoutes: true
    },
    updates: {
        // url: 'https://expo-updates-server-nu.vercel.app/api/manifest',
        url: 'http://localhost:3000/api/manifest'
        // url: 'http://10.0.2.2:3000/api/manifest'
    },
    runtimeVersion: version.split('.')[0],
    extra: {
        eas: {
            projectId: '58154bdd-70ab-49f4-8c0b-cd74e32e3370'
        }
    }
};

export default config;
