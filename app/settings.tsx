import React from "react";
import { View } from "react-native";
import { Session } from '@supabase/supabase-js'
import Account from "../components/auth/Account";

const settings = ({ session }: { session: Session }) => {

  return (
    <View>
      <Account session={session} />
    </View>
  );
};

export default settings;
