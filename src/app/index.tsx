import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>NODE_ENV: {process.env.NODE_ENV}</Text>
      <Text>API_URL: {process.env.API_URL}</Text>
      <Text>EXPO_PUBLIC_API_URL: {process.env.EXPO_PUBLIC_API_URL}</Text>
    </View>
  );
}
