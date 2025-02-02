import React from "react";
import { Pressable, Text } from "react-native";
import { createStyles, fonts, colors } from "@/styles";

const styles = createStyles({
  text: {
    fontSize: fonts.md,
    color: colors.primary,
  },
  pressed: {
    opacity: 0.5,
  },
});

const ClickableText = ({ onPress, text, containerStyle, textStyle }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [containerStyle, pressed && styles.pressed]}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Pressable>
  );
};

export default ClickableText;
