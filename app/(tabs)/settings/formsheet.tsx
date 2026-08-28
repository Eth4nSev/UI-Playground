import { Colors } from "@/colors/colors";
import ExitButton from "@/components/ui/exitButton";
import { Text, useColorScheme, View } from "react-native";

export default function formSheet() {
  const theme = useColorScheme() ?? "light";
  const colors = Colors[theme];

  return (
    <>
      <ExitButton />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Text style={{ color: colors.text }}>Formsheet</Text>
      </View>
    </>
  );
}
