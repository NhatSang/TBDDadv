import { StyleSheet, Text, View } from "react-native";
import FlyAnimation from "./FlyAnimation";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", left: 0 }}>
        <FlyAnimation sourceImg={require("./assets/balloon.png")} />
      </View>
      <View style={{ position: "absolute", left: 200 }}>
        <FlyAnimation sourceImg={require("./assets/balloon2.png")} />
      </View>
      <View style={{ position: "absolute", left: 400 }}>
        <FlyAnimation sourceImg={require("./assets/balloon3.png")} />
      </View>
      <View style={{ position: "absolute", left: 600 }}>
        <FlyAnimation sourceImg={require("./assets/balloon.png")} />
      </View>
      <View style={{ position: "absolute", left: 800 }}>
        <FlyAnimation sourceImg={require("./assets/balloon2.png")} />
      </View>
      <View style={{ position: "absolute", left: 1000 }}>
        <FlyAnimation sourceImg={require("./assets/balloon3.png")} />
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
