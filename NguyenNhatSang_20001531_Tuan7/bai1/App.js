import { useRef } from "react";
import { Animated, PanResponder, StyleSheet, Text, View } from "react-native";

export default function App() {
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: (evt, gestureState) => {
        console.log("start");
        console.log("moveX", gestureState.moveX);
        console.log("moveY", gestureState.moveY);
      },

      onPanResponderMove: (evt, gestureState) => {
        console.log("moveX", gestureState.moveX);
        console.log("moveY", gestureState.moveY);
      },

      onPanResponderRelease: (evt, gestureState) => {
        console.log("release");
        console.log("moveX", gestureState.moveX);
        console.log("moveY", gestureState.moveY);
      },
    })
  ).current;
  return <Animated.View style={styles.container} {...panResponder.panHandlers}></Animated.View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
