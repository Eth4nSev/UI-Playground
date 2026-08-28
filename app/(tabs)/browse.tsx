import { Colors } from "@/colors/colors";
import { router } from "expo-router";
import { Pressable, Text, useColorScheme, View } from "react-native";

export default function Browse() {
  const theme = useColorScheme() ?? "light";
  const colors = Colors[theme];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <Pressable onPress={() => router.push("/modal")}>
        <Text style={{ color: colors.text }}>Browse Page</Text>
      </Pressable>
    </View>
  );
}
