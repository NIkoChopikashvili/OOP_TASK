import { Text, View, StyleSheet } from "react-native";
import React, { forwardRef, useImperativeHandle, useState } from "react";

exports.SnackBar = forwardRef((_, ref) => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    show: () => {
      setVisible(true);
    },
    hide: () => {
      setVisible(false);
    },
  }));

  return (
    <View>
      {visible ? (
        <View
          style={{
            width: 429,
            height: 70,
            flexDirection: "row",
            display: "flex",
            backgroundColor: "grey",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Text style={{ color: "yellow" }}>No internet connection!</Text>
          <Text style={{ color: "red" }}>RETRY</Text>
        </View>
      ) : null}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
});
