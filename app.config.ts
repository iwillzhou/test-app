import 'ts-node/register';
import { ExpoConfig } from 'expo/config';

const isProduction = process.env.APP_ENV === 'production';

const appNameSuffix = isProduction ? '' : `(${process.env.APP_ENV})`;
const appIdSuffix = isProduction ? '' : `.${process.env.APP_ENV}`;

const config: ExpoConfig = {
    name: `test-app${appNameSuffix}`,
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
    plugins: [
        'expo-router',
        [
            'expo-build-properties',
            {
                android: {
                  usesCleartextTraffic: !isProduction
                }
            }
        ]
    ],
    experiments: {
        typedRoutes: true
    },
    updates: {
        // url: 'https://u.expo.dev/58154bdd-70ab-49f4-8c0b-cd74e32e3370',
        // url: 'http://192.168.10.6:3000/api/manifest',
        url: 'http://10.0.2.2:3000/api/manifest',
        enabled: true,
        fallbackToCacheTimeout: 30000
        // codeSigningCertificate: './code-signing/certificate.pem',
        // codeSigningMetadata: {
        //     keyid: 'main',
        //     alg: 'rsa-v1_5-sha256'
        // }
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
