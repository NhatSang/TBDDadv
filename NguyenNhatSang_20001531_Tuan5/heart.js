import { Animated, StyleSheet, Text, View, Image } from "react-native";
import React, { Component } from "react";

class Heart extends Component {
  constructor() {
    super();
    this.zoomAnim = new Animated.Value(1);
    this.shakeAnim = new Animated.Value(0);
  }

  componentDidMount() {
    this.animation();
  }

  animation = () => {
    Animated.sequence([
      Animated.timing(this.zoomAnim, {
        toValue: 2,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(this.shakeAnim, {
          toValue: -1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.shakeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(this.shakeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(this.zoomAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => this.animation());
  };
  render() {
    return (
      <View style={{position:'absolute', top:100,right:200}}>
        <Animated.Image
          source={require("./assets/heart.png")}
          style={{
            width: 150,
            height: 150,
            transform: [
              { scale: this.zoomAnim },
              {
                rotate: this.shakeAnim.interpolate({
                  inputRange: [-1,0, 1],
                  outputRange: ["-15deg", "0deg", "15deg"],
                }),
              },
            ],
          }}
        />
      </View>
    );
  }
}

export default Heart;

const styles = StyleSheet.create({});
