import { useRef } from "react";
import { StyleSheet, Text, View, PanResponder, Animated } from "react-native";

export default function App() {
  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const colorAnim = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => {
        Animated.timing(colorAnim, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }).start();
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),

      onPanResponderRelease: () => {
        Animated.parallel([
          Animated.timing(colorAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(pan, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]).start();
      },
    })
  ).current;
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width:100,
          height:100,
          backgroundColor: colorAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ["red", "blue"],
          }),
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
        {...panResponder.panHandlers}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
