import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/ui/Button";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

const PlaceHolderImage = require("@/assets/images/background-image.png");

export default function HomeScreen() {
  const [selectedImage, setSelectedImage] =
    useState<ImageSourcePropType>(PlaceHolderImage);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri as ImageSourcePropType);
    } else {
      alert("You didn't select any image");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button
          label="Choose a photo"
          theme="primary"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
