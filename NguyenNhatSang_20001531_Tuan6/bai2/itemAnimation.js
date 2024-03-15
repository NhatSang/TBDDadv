import { Animated, StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

class ItemAnimation extends Component {
  constructor() {
    super();
    this.zoomAnim = new Animated.Value(1);
  }
  componentDidMount() {
    this.animation();
  }

  animation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.zoomAnim, {
          toValue: 2,
          duration: this.props.duration,
          useNativeDriver: true,
        }),
        Animated.timing(this.zoomAnim, {
          toValue: 1,
          duration: this.props.duration,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };
  render() {
    return (
      <View>
        <Animated.Image
          source={this.props.image}
          style={{
            width: 100,
            height: 100,
            transform: [{ scale: this.zoomAnim }],
          }}
        />
      </View>
    );
  }
}

export default ItemAnimation;

const styles = StyleSheet.create({});
