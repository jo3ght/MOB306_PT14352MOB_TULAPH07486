import React, { useState } from "react";

import {
  Text,
  View,
  Modal,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import NameUser from "./bookList";
export default function userProfile() {
  const [showModal, setShowModal] = useState(true);

  const [addName, setAddName] = useState("");
  const [addAge, setAddAge] = useState("");

  function validateFrom() {
    if (addName == "") {
      alert("Please insert your name");
    } else if (addAge == "") {
      alert("Please insert your age! ");
    } else if (isNaN(addAge)) {
      alert("Age is a number");
    } else if (addAge < 18) {
      alert("You need to older than 18");
    } else {
      setShowModal(false);
    }
  }
  return (
    <View style={style.mainContainer}>
      <View>
        <NameUser Username={addName} />
      </View>

      <Modal visible={showModal}>
        <ImageBackground
          style={style.bg}
          source={{
            uri:
              "https://i.pinimg.com/564x/c5/c7/f3/c5c7f350d094b00a587a23b627920cc1.jpg"
          }}
        >
          <Text style={style.textTile}>Enter your infomartion</Text>
          <Text style={style.titleInput}>Full Name: </Text>

          <TextInput
            placeholder="Anderson Berlus"
            style={style.input}
            value={addName}
            keyboardType="default"
            onChangeText={value => setAddName(value)}
          />
          <Text style={style.titleInput}>Full Name: </Text>

          <TextInput
            keyboardType="numeric"
            style={style.input}
            placeholder="29"
            value={addAge}
            onChangeText={value => setAddAge(value)}
          />

          <TouchableOpacity style={style.btn} onPress={() => validateFrom()}>
            <Text style={style.txt}>Enter</Text>
          </TouchableOpacity>
        </ImageBackground>
      </Modal>
    </View>
  );
}

const style = StyleSheet.create({
  titleInput: {
    fontWeight: "bold",
    color: "#ea526f",
    marginLeft: 16,
    marginTop: 18,
    fontWeight: "bold",
    fontSize: 15
  },
  txt: {
    fontSize: 15,
    fontWeight: "bold",
    alignItems: "center",
    color: "white",
    justifyContent: "center"
  },
  btn: {
    borderColor: "#ea526f",
    backgroundColor: "#ea526f",
    margin: 18,
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
    borderRadius: 30,
    height: 60,
    textAlign: "center",
    borderWidth: 1
  },
  input: {
    margin: 18,
    color: "#ffff",
    marginTop: 16,
    height: 60,
    fontSize: 25,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ffff",
    paddingHorizontal: 20
  },
  bg: {
    width: "100%",
    height: "100%"
  },
  button: {
    alignItems: "center",
    fontSize: 30,
    padding: 10,
    color: "blue",
    margin: 20
  },
  textTile: {
    fontSize: 35,
    color: "white",
    textAlign: "center",
    marginTop: 100
  }
});

