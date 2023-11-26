import React from "react";
import { View, Text } from "react-native";
import LogoutButton from "../components/auth/LogoutButton";
import { Redirect } from 'expo-router';

const settings = () => {

  const redirect = () => {
    <Redirect href="/home" />
    console.log('Redirect');

  }

  return (
    <View>
      <LogoutButton />
      <Text onPress={() => redirect()}>Redirect?</Text>
    </View>
  );
};

export default settings;
