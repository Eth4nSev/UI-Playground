import { Colors } from "@/colors/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { GlassView } from "expo-glass-effect";
import { router } from "expo-router";
import { Pressable, useColorScheme } from "react-native";

export default function ExitButton() {
  const theme = useColorScheme() ?? "light";
  const colors = Colors[theme as "light" | "dark"];

  return (
    <GlassView
      style={{
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 16,
        top: 16,
        borderRadius: 50,
      }}
      isInteractive
    >
      <Pressable onPress={() => router.back()}>
        <MaterialIcons name="close" size={28} color={colors.text} />
      </Pressable>
    </GlassView>
  );
}
