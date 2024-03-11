import { Animated, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

class TestXY extends Component {
  constructor() {
    super();
    this.transAnim = new Animated.ValueXY({ x: 0, y: 0 });
  }

  componentDidMount() {
    this.fall();
  }

  fall = () => {
    Animated.sequence([
      Animated.timing(this.transAnim, {
        toValue: { x: 500, y: 600 },
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(this.transAnim, {
        toValue: { x: 700, y: 400},
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(this.transAnim, {
        toValue: { x: 900, y: 600 },
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(this.transAnim, {
        toValue: { x: 1100, y: 400 },
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(this.transAnim, {
        toValue: { x: 1300, y: 600 },
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  render() {
    return (
      <View style={{position:'absolute',top:0,left:0}}>
        <Animated.View
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            backgroundColor: "black",
            transform:[{translateX:this.transAnim.x},{translateY:this.transAnim.y}]
          }}
        ></Animated.View>
      </View>
    );
  }
}

export default TestXY;

const styles = StyleSheet.create({});
