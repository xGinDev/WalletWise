import { supabase } from '../../lib/supabase'
import { Text } from 'react-native'

export default function LogoutButton() {

  async function signOut() {
    await supabase.auth.signOut()
  }

  return (
    <>
      <Text onPress={() => signOut}>Salir</Text>
    </>
  );
}
