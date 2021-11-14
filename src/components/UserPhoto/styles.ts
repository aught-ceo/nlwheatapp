import { StyleSheet } from "react-native";
import { COLORS } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    borderColor: COLORS.BLACK_SECONDARY,
    borderWidth: 4,
    width: 48,
    height: 48,
  },
});
