import { StyleSheet, View, Button } from "react-native";
import { SnackBar } from "./components/SnackBar";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { showStatus } from "./runTimeConst";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Button
          title="Click Me"
          onPress={() => {
            showStatus.visible.show();
          }}
        />
      </View>

      <View style={styles.SnackBar}>
        <SnackBar ref={(ref) => (showStatus.visible = ref)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: getStatusBarHeight() + 30,
    justifyContent: "space-between",
  },
  SnackBar: {
    marginBottom: 10,
  },
});
