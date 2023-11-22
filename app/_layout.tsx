import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

const Header = () => {
    return (
        <View style={{ flexDirection: 'column', margin: 15 }}>
            <Text>Header</Text>
            <Text>Header</Text>
            <Text>Header</Text>
            <Text>Header</Text>
        </View>
    )
}

export default function Layout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerTitle: (props) => (
                    <Text>Header</Text>
                ),
                /*  header: () => <Header />, */
                headerTintColor: 'transparent',
                headerBackTitleVisible: false,
            }} />
    );
}
