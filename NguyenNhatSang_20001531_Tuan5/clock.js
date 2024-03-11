import { Animated, StyleSheet, Text, View, Image } from "react-native";
import React, { Component } from "react";

class AnimatedClock extends Component {
  constructor() {
    super();
    this.secAnim = new Animated.Value(0);
    this.minAnim = new Animated.Value(0);
    this.hAnim = new Animated.Value(0);
  }

  componentDidMount() {
    this.secspin();
    this.minspin();
    this.hspin();
  }

    secspin = () => {
      this.secAnim.setValue(0);
      Animated.timing(this.secAnim, {
        toValue: 1,
        duration: 60000,
        useNativeDriver: true,
      }).start(() => this.secspin());
    };

    minspin = () => {
      this.minAnim.setValue(0);
      Animated.timing(this.minAnim, {
        toValue: 1,
        duration: 3600000,
        useNativeDriver: true,
      }).start(() => this.minspin());
    };

    hspin = () => {
      this.hAnim.setValue(0);
      Animated.timing(this.hAnim, {
        toValue: 1,
        duration: 86400000,
        useNativeDriver: true,
      }).start(() => this.hspin());
    };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./assets/tokei.jpg")}
          style={{ width: 500, height: 500 }}
        />
        <Animated.View
          style={{
            width: 10,
            height: 160,
            backgroundColor: "black",
            position: "absolute",
            top: "15%",
            left: "50%",
            transform: [
              {
                rotate: this.secAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
            transformOrigin: "bottom right",
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width: 10,
            height: 130,
            backgroundColor: "black",
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: [
              {
                rotate: this.minAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
            transformOrigin: "bottom right",
          }}
        ></Animated.View>
        <Animated.View
          style={{
            width: 10,
            height: 100,
            backgroundColor: "black",
            position: "absolute",
            top: "28%",
            left: "50%",
            transform: [
              {
                rotate: this.hAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
            transformOrigin: "bottom right",
          }}
        ></Animated.View>
      </View>
    );
  }
}

export default AnimatedClock;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
