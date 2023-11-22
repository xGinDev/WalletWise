import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Link, Stack } from "expo-router";

export default function Page() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
        }}
      />
      <Text>Index Screen</Text>
      <Link href={{ pathname: 'settings' }}>Go to Details</Link>
      <Link href={{ pathname: 'home' }}>Go to Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
