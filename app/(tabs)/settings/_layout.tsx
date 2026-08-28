import { Colors } from "@/colors/colors";
import { isLiquidGlassAvailable } from "expo-glass-effect";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";

export default function SettingsLayout() {
  const theme = useColorScheme() ?? "light";
  const colors = Colors[theme];

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Settings",
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="formsheet"
        options={{
          presentation: "formSheet",
          sheetGrabberVisible: true,
          sheetAllowedDetents: [0.6],
          headerShown: false,
          contentStyle: {
            backgroundColor: isLiquidGlassAvailable()
              ? "transparent"
              : colors.background,
          },
        }}
      />
    </Stack>
  );
}
