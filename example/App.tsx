import AppExit from 'expo-app-exit';
import { Button, View } from 'react-native';

export default function App() {
    return <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Close" onPress={() => AppExit()} />
    </View>;
}