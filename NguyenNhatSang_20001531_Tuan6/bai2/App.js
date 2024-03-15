import { StyleSheet, Text, View } from "react-native";
import ShipperAnimation from "./shipperAnimation";
import TextAnimation from "./TextAnimation";
import ItemAnimation from "./itemAnimation";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ display: "flex", alignItems: "flex-start" }}>
        <ShipperAnimation />
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextAnimation />
      </View>
      <View style={{ padding: 100 }}>
        <View style={{ display: "flex", alignItems: "flex-start" }}>
          <ItemAnimation
            image={require("./assets/ramen.png")}
            duration={3000}
          />
        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <ItemAnimation image={require("./assets/cola.png")} duration={4000} />
        </View>
        <View style={{ display: "flex", alignItems: "flex-end" }}>
          <ItemAnimation
            image={require("./assets/snack.png")}
            duration={2000}
          />
        </View>
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
