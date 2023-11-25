import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eeolatuhsojrhilsiuro.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVlb2xhdHVoc29qcmhpbHNpdXJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA0NTU3OTcsImV4cCI6MjAxNjAzMTc5N30.wkb96hxhrr2ocjmMh7JkBa7z_JdMollWRgO1wS7llLc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
