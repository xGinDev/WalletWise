import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Link, Stack } from "expo-router";
const image = { uri: 'https://blacksipqa.vteximg.com.br/arquivos/index.jpg' };

export default function Page() {
  return (
    <View style={styles.container}>
      <Stack.Screen />
      <View style={styles.container_login}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image} />
        <View style={styles.sub_container_login}>
          <Link style={styles.link} href={{ pathname: 'home' }}>Go to Home</Link>
          <Link style={styles.link} href={{ pathname: 'settings' }}>Go to Settings</Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: .4
  },
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
  },
  container_login: {
    flex: 1
  },
  sub_container_login: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#fff",
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    /* height: 250, */
    padding: 50,
    borderTopLeftRadius: 50
  }
});
