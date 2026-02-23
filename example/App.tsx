import AppExit from 'expo-app-exit';
import { Button } from 'react-native';

export default function App() {
    return <Button title="Close" onPress={() => AppExit()} />;
}