import { Text, View, Button } from 'react-native';
import * as Updates from 'expo-updates';

export default function Index() {
    async function onFetchUpdateAsync() {
        try {
            const update = await Updates.checkForUpdateAsync();

            if (update.isAvailable) {
                await Updates.fetchUpdateAsync();
                await Updates.reloadAsync();
            }
        } catch (error) {
            // You can also add an alert() to see the error message in case of an error when fetching updates.
            alert(`Error fetching latest Expo update: ${error}`);
        }
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Text>Hello world. OTA updates is working! </Text>
            <Text>Edit app/index.tsx to edit this screen.</Text>
            <Text>NODE_ENV: {process.env.NODE_ENV}</Text>
            <Text>API_URL: {process.env.API_URL}</Text>
            <Text>EXPO_PUBLIC_API_URL: {process.env.EXPO_PUBLIC_API_URL}</Text>
            <Button title="Fetch update" onPress={onFetchUpdateAsync} />
        </View>
    );
}
