import { Animated, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

class Parallel extends Component {
  constructor() {
    super();
    this.xAnim = new Animated.Value(0);
    this.bgAnim = new Animated.Value(0);
    this.zoomAnim = new Animated.Value(1);
  }

  componentDidMount() {
    this.animattion();
  }

  animattion = () => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.xAnim, {
          toValue: 500,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(this.bgAnim, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(this.zoomAnim, {
          toValue: 2,
          duration: 5000,
          useNativeDriver: true,
        }),
      ]),
      Animated.delay(3000),
      Animated.parallel([
        Animated.timing(this.xAnim, {
          toValue: 1000,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(this.bgAnim, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: true,
        }),
        Animated.timing(this.zoomAnim, {
          toValue: 1,
          duration: 5000,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  };
  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: 200,
            height: 200,
            backgroundColor: this.bgAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["blue", "green"]
            }),
            position: "absolute",
            left: this.xAnim,
            transform: [{ scale: this.zoomAnim }],
          }}
        ></Animated.View>
      </View>
    );
  }
}
export default Parallel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
