import React, {useRef,useState} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Button,
  SafeAreaView,
  Image,
  TextInput

} from 'react-native';

const App = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const zoomAnim = useRef(new Animated.Value(100)).current;
  const transYAnim = useRef(new Animated.Value(0)).current;
  const transXAnim = useRef(new Animated.Value(0)).current;
  const [y, setY] = useState("");
  const [x, setX] = useState("");
  const bgAnim = useRef(new Animated.Value(0)).current;
  const clock = useRef(new Animated.Value(0)).current;
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  const zoomIn = () => {
    Animated.timing(zoomAnim, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const zoomOut = () => {
    Animated.timing(zoomAnim, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const transY = () => {
    Animated.timing(transYAnim, {
      toValue: parseInt(y),
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  const transX = () => {
    Animated.timing(transXAnim, {
      toValue: parseInt(x),
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const changeBg = () => {
    Animated.timing(bgAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const startClock = () => {
    Animated.timing(clock, {
      toValue: 1,
      duration: 60000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
            height: zoomAnim,
            width: zoomAnim,
            top: transYAnim,
            left: transXAnim,
            backgroundColor: bgAnim.interpolate({
              inputRange: [0, 1],
              outputRange: ["blue", "red"],
            }),
          },
        ]}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==",
          }}
        />
      </Animated.View>
      <View style={styles.buttonRow}>
        <Button title="Fade In View" onPress={fadeIn} />
        <Button title="Fade Out View" onPress={fadeOut} />
        <Button title="Zoom In" onPress={zoomIn} />
        <Button title="Zoom Out" onPress={zoomOut} />
        <TextInput
          style={{ borderWidth: 1 }}
          onChangeText={setY}
          keyboardType={"numeric"}
        />
        <Button title="Trans Y" onPress={transY} />
        <TextInput
          style={{ borderWidth: 1 }}
          onChangeText={setX}
          keyboardType={"numeric"}
        />
        <Button title="Trans X" onPress={transX} />
        <Button title="Change bg" onPress={changeBg} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    padding: 20,
    margin: 20,
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});

export default App;