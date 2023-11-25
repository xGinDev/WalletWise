import React, { useEffect, useState } from "react";
import { Session } from '@supabase/supabase-js'
import { View, StyleSheet, ImageBackground } from "react-native";
import { Link, Stack } from "expo-router";
import { supabase } from "../lib/supabase";
import Auth from "../components/Auth/Auth";
const image = { uri: 'https://blacksipqa.vteximg.com.br/arquivos/index.jpg' };

export default function Page() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Stack.Screen />
      {session && session.user ?
        <Link style={styles.link} href={{ pathname: 'settings' }}>Go to Settings</Link> : <Auth />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  link: {
    color: "#fff",
    backgroundColor: "#000",
    padding: 20,
    width: 300,
    borderRadius: 30,
    overflow: 'hidden',
    textAlign: 'center',
    fontWeight: "700"
  }
});
