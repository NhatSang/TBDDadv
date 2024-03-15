import { Animated, StyleSheet, Text, View, Image } from "react-native";
import React, { Component } from "react";
class FlyAnimation extends Component {
  constructor() {
    super();
    this.yAnim = new Animated.Value(1000);
    this.fadeAnim = new Animated.Value(1);
    this.springAnim = new Animated.Value(0);
  }
  componentDidMount() {
    this.animation();
  }
  animation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.yAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.spring(this.springAnim,{
          toValue:30,
          friction:1,// he so ma sat cang cao cang cham
          tension:100, // do cang cang cao cang nhanh,
        })
        ,
        Animated.timing(this.fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };
  render() {
    return (
      <View>
        <Animated.Image
          source={this.props.sourceImg}
          style={{
            width: 100,
            height: 100,
            opacity: this.fadeAnim,
            transform: [{ translateY: this.yAnim },{translateY:this.springAnim}],
          }}
        ></Animated.Image>
      </View>
    );
  }
}

export default FlyAnimation;

const styles = StyleSheet.create({});
