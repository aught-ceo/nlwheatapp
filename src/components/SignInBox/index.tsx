import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";
import { COLORS } from "../../theme";
import { useAuth } from "../../hooks/auth";

export function SignInBox() {
  const { signIn, isSigningIn } = useAuth();
  return (
    <View style={styles.container}>
      <Button
        title="ENTRAR COM O GITHUB"
        backgroundColor={COLORS.YELLOW}
        color={COLORS.BLACK_PRIMARY}
        icon="github"
        onPress={signIn}
        isLoading={isSigningIn}
      ></Button>
    </View>
  );
}
