import { useRef } from "react";
import { StyleSheet, Text, View, Image, Animated } from "react-native";
import AnimatedClock from "./clock";
import Parallel from "./parallel";
import TestXY from "./valueXY";
import Heart from "./heart";
export default function App() {
  const secAnim = useRef(new Animation());
  return (
    <View style={styles.container}>
      <AnimatedClock />
      <Parallel />
      <TestXY />
      <Heart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
