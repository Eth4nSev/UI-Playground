import { Colors } from "@/colors/colors";
import { useState } from "react";
import {
	ActivityIndicator,
	StatusBar,
	StyleSheet,
	Switch,
	Text,
	TextInput,
	useColorScheme,
	View,
} from "react-native";

export default function Index() {
	const theme = useColorScheme() ?? "light";
	const colors = Colors[theme];

	const [isEnabled, setIsEnabled] = useState<boolean>(true);

	return (
		<>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: colors.background,
				}}
			>
				<Text style={{ color: colors.text }}>Home Page</Text>
				<Switch
					value={isEnabled}
					onValueChange={setIsEnabled}
					style={[{ alignSelf: "center" }, styles.newElement]}
				/>
				<ActivityIndicator style={styles.newElement} />
				<StatusBar hidden />
				<TextInput
					placeholder="Type here"
					style={[
						styles.newElement,
						{
							borderWidth: StyleSheet.hairlineWidth,
							borderColor: colors.text,
							fontSize: 32,
							width: 300,
							padding: 10,
							marginHorizontal: 16,
							color: colors.text,
						},
					]}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	newElement: {
		marginTop: 20,
	},
});
