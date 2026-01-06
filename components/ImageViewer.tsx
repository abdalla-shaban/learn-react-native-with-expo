import { Image } from "expo-image";
import { ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  imgSource: ImageSourcePropType;
};

const ImageViewer = ({ imgSource }: Props) => {
  return <Image source={imgSource} style={styles.image} />;
};

export default ImageViewer;

const styles = StyleSheet.create({
  image: { width: 320, height: 440, borderRadius: 18 },
});
