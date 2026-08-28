import { Colors } from "@/colors/colors";
import { Text, useColorScheme, View } from "react-native";

export default function Modal() {
  const theme = useColorScheme() ?? "light";
  const colors = Colors[theme];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Text style={{ color: colors.text }}>Form Sheet</Text>
    </View>
  );
}
