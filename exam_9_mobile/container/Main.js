import React, { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  Modal,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "../styles";
import Contact from "../components/Contact";
import { fetchContact, showModal, closemodal } from "../store/actions";

export default function Main() {
  const contacts = useSelector((state) => state.contacts);
  const loading = useSelector((state) => state.loading);
  const modalVisible = useSelector((state) => state.modalVisible);
  const dispatch = useDispatch();

  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);
  const clicked = () => {
    dispatch(showModal());
  };
  console.log(modalVisible);
const close = () => {
    dispatch(closemodal())
}
  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        style={styles.modal}
        transparent={false}
        visible={modalVisible}>
        <Image
          source={{
            uri: "https://bota21.github.io/images/img/pepperoni.jpeg",
          }}
        />
        <View style={styles.modalWrapper}>
          <Text>Title</Text>
          <Text>Email</Text>
          <Text>Phone</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={close}>
          <Text>Back</Text>
        </TouchableOpacity>
      </Modal>

      <FlatList
        data={contacts}
        renderItem={(item) => {
          return (
            <Contact
              title={item.item.title}
              image={item.item.image}
              click={clicked}
            />
          );
        }}
      />
      {loading ? (
        <ActivityIndicator
          style={styles.spinner}
          size='large'
          color='#0000ff'
        />
      ) : null}
    </View>
  );
}
