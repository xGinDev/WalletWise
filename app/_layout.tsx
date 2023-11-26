import { Tabs } from 'expo-router';
import { Entypo } from '@expo/vector-icons';

export default function Layout() {
    return (
        <Tabs>
            <Tabs.Screen
                name='home'
                options={{
                    headerTitle: "Estad.",
                    tabBarIcon: () => <Entypo name='credit' size={24} color="black" />,
                    tabBarLabel: "Estad"
                }} />
            <Tabs.Screen
                name='settings'
                options={{
                    headerTitle: "Configuración",
                    tabBarIcon: () => <Entypo name='dots-three-horizontal' size={24} color="black" />,
                    tabBarLabel: "Más"
                }} />
        </Tabs>
    );
}
