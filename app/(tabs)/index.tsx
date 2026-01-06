import EmojiList from "@/components/EmojiList";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/ui/Button";
import CircleButton from "@/components/ui/CircleButton";
import IconButton from "@/components/ui/IconButton";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";

const PlaceHolderImage = require("@/assets/images/background-image.png");

export default function HomeScreen() {
  const [selectedImage, setSelectedImage] =
    useState<ImageSourcePropType>(PlaceHolderImage);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<
    ImageSourcePropType | undefined
  >(undefined);
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri as ImageSourcePropType);
      setShowAppOptions(true);
    } else {
      alert("You didn't select any image");
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage} />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
        )}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <View style={styles.optionsRow}>
            <IconButton
              icon="refresh"
              label="Reset"
              onPress={() => {
                setSelectedImage(PlaceHolderImage);
                setShowAppOptions(false);
                setPickedEmoji(undefined);
              }}
            />
            <CircleButton
              onPress={() => {
                setShowModal(true);
              }}
            />
            <IconButton icon="save-alt" label="Save" onPress={() => {}} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContainer}>
          <Button
            label="Choose a photo"
            theme="primary"
            onPress={pickImageAsync}
          />
          <Button label="Use this photo" />
        </View>
      )}
      <EmojiPicker
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <EmojiList
          onCloseModal={() => setShowModal(false)}
          onSelect={setPickedEmoji}
        />
      </EmojiPicker>
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
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});
