import { TouchableOpacity, Text, View } from 'react-native'
import { supabase } from '../../lib/supabase';

export default function LogoutButton() {

  async function signOut() {
    await supabase.auth.signOut()
  }

  return (
    <View>
      <TouchableOpacity onPress={() => signOut()}>
        <Text>Salir</Text>
      </TouchableOpacity>
    </View>
  );
}
