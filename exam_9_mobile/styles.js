import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
    marginTop: 50,
  },
  wrapper: {
    width: "100%",
    padding: 5,
    backgroundColor: "#EEEEEE",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  text: {
    width: "80%",
  },
  spinner: {
    position: "absolute",
    top: "50%",
    left: "50%",
  },
  modal: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center"
  },
  modalWrapper: {
    flex: 1,
  },
  button: {
    textAlign: "center",
    backgroundColor: "blue",
    paddingVertical: 10,
    alignItems: "center"
  },
  modalImg: {
      width: 200,
      height: 200
  }
});
