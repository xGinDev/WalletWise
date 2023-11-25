import React from "react";
import { View, Text } from "react-native";
import Menu from "../components/Menu";
import LogoutButton from "../components/auth/LogoutButton";

const settings = () => {
  return (
    <View>
      <Text>settings</Text>
      <Menu />
      <LogoutButton />
    </View>
  );
};

export default settings;
