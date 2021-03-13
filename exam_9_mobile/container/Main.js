import React, { useEffect, useState } from "react";
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
  const [info, setInfo] = useState("");

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const clicked = (id) => {
    const index = contacts.findIndex((contact) => contact.id === id);
    setInfo(contacts[index]);
    dispatch(showModal());
  };
  
  const close = () => {
    dispatch(closemodal());
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType='slide'
        style={styles.modal}
        transparent={false}
        visible={modalVisible}>
        <Image
          style={styles.modalImg}
          source={{
            uri: info.image,
          }}
        />
        <View style={styles.modalWrapper}>
          <Text>{info.title}</Text>
          <Text>{info.email}</Text>
          <Text>{info.phone}</Text>
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
              id={item.item.id}
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
