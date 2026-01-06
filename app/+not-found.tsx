import { Link, Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Not Found" }} />
      <View style={styles.container}>
        <Link style={styles.link} href={"/"}>
          Go to Home Page
        </Link>
      </View>
    </>
  );
};

export default NotFoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  link: {
    color: "#fff",
    textDecorationLine: "underline",
    fontSize: 20,
  },
});
