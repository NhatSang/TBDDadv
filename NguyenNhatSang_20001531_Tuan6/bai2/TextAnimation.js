import { StyleSheet, Text, View, Animated } from "react-native";
import React, { Component } from "react";
class TextAnimation extends Component {
  constructor() {
    super();
    this.zoomAnim = new Animated.Value(1);
    this.colorAnim = new Animated.Value(0);
  }

  componentDidMount() {
    this.animation();
  }
  animation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(this.zoomAnim, {
            toValue: 2,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(this.colorAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
          }),
        ]),
        Animated.parallel([
          Animated.timing(this.zoomAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
          }),
          Animated.timing(this.colorAnim, {
            toValue: 0,
            duration: 3000,
            useNativeDriver: true,
          }),
        ]),
      ])
    ).start();
  };
  render() {
    return (
      <View>
        <Animated.Text
          style={{
            transform: [{ scale: this.zoomAnim }],
            color: this.colorAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["blue", "red"],
            }),
            fontSize:18
          }}
        >
          Shoppe cái gì cũng có....
        </Animated.Text>
      </View>
    );
  }
}

export default TextAnimation;

const styles = StyleSheet.create({});
