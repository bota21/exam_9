import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { styles } from "../styles";

const Contact = ({ image, title, click, id }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={()=>click(id)}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Contact;
