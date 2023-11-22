import { Stack } from 'expo-router';
import Menu from '../components/Menu';

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        />
    );
}
