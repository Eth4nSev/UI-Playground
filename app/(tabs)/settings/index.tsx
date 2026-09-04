import { Colors } from "@/colors/colors";
import { GlassView } from "expo-glass-effect";
import { router } from "expo-router";
import { Pressable, Text, useColorScheme, View } from "react-native";

export default function Settings() {
  const theme = useColorScheme() ?? "light";
  const colors = Colors[theme as "light" | "dark"];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <Text
        style={{
          color: colors.text,
        }}
      >
        Settings Page
      </Text>
      <GlassView
        style={{
          padding: 20,
          borderRadius: 50,
          marginTop: 30,
        }}
        isInteractive
      >
        <Pressable onPress={() => router.push("/(tabs)/settings/formsheet")}>
          <Text style={{ fontSize: 20, color: colors.text }}>
            Open Formsheet
          </Text>
        </Pressable>
      </GlassView>
    </View>
  );
}
