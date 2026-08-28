import { Colors } from "@/colors/colors";
import { Text, useColorScheme, View } from "react-native";

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
			<Text style={{ color: colors.text }}>Browse Page</Text>
		</View>
	);
}
