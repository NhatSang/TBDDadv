import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";
import React, { Component } from "react";
class ShipperAnimation extends Component {
  constructor() {
    super();
    const { width, height } = Dimensions.get("window");

    this.state = {
      screenWidth: width,
      screenHeight: height,
    };
    this.xAnim = new Animated.Value(0);
    this.spinAnim = new Animated.Value(0);
  }
  componentDidMount() {
    this.animation();
  }

  animation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.xAnim, {
          toValue: this.state.screenWidth,
          duration: 3000,
          useNativeDriver: true,
        }),
        Animated.timing(this.spinAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.xAnim, {
          toValue: 0,
          duration: 3000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };
  render() {
    return (
      <View>
        <Animated.Image
          source={require("./assets/delivery.png")}
          style={{
            width: 150,
            height: 150,
            left: this.xAnim,
            transform: [
              {
                rotateY: this.spinAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "180deg"],
                }),
              },
            ],
          }}
        />
      </View>
    );
  }
}

export default ShipperAnimation;

const styles = StyleSheet.create({});
