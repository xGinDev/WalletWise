import { Tabs } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { Text } from 'react-native-elements';

export default function Layout({ segment }) {
    if (segment === '(settings)') {
        return <Text>Hola</Text>
    }

    return (
        <Tabs>
            <Text>Nada</Text>
        </Tabs>
    );
}
