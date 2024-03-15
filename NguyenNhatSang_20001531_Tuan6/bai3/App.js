import { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";

export default function App() {
  const { width, height } = Dimensions.get("window");
  const catAnim = useRef(new Animated.Value(height)).current;
  const mouseAnim = useRef(new Animated.Value(0)).current;
  const spinAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const check = () => {
      const catLocation = catAnim._value;
      const mouseLocation = mouseAnim._value;
      // const distance = Math.sqrt(
      //   Math.pow(catLocation, 2) + Math.pow(mouseLocation, 2)
      // );
      // console.log(distance);
      console.log("cat " + catLocation);
      console.log("mouse " + mouseLocation);
      if (catLocation == 0 && mouseLocation == width / 2) {
        Animated.timing(catAnim).stop();
        Animated.timing(mouseAnim).stop();
      }
    };

    const catAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(catAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    const mouseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(mouseAnim, {
          toValue: width,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(spinAnim, {
          toValue: 1,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(mouseAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    );

    catAnimation.start();
    mouseAnimation.start();

    const catSub = catAnim.addListener(check);
    const mouseSub = mouseAnim.addListener(check);

    return () => {
      catSub.remove();
      mouseSub.remove();
      catAnimation.stop();
      mouseAnimation.stop();
    };
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Animated.Image
          source={require("./assets/cat.png")}
          style={{
            width: 300,
            height: 300,
            transform: [{ translateY: catAnim }],
          }}
        />
      </View>
      <View style={{ position: "absolute", top: 0 }}>
        <Animated.Image
          source={require("./assets/mouse.png")}
          style={{
            width: 100,
            height: 100,
            transform: [
              { translateX: mouseAnim },
              {
                rotateY: spinAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "180deg"],
                }),
              },
            ],
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
