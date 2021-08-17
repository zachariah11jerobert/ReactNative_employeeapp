import React, { useState } from "react";
import { Button, StyleSheet,View, Modal } from "react-native";
import { TextInput } from "react-native-paper";

const CreateEmployee = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [picture, setPicture] = useState("");
  const [modal, setModal] = useState(false);

  return (
    <View style={styles.root}>
      <TextInput
        label="Name"
        style={styles.inputStyle}
        value={name}
        theme={theme}
        mode="outlined"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label="Email"
        style={styles.inputStyle}
        value={email}
        theme={theme}
        mode="outlined"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        label="Phone"
        style={styles.inputStyle}
        value={phone}
        theme={theme}
        keyboardType="number-pad"
        mode="outlined"
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        label="Salary"
        style={styles.inputStyle}
        value={salary}
        theme={theme}
        mode="outlined"
        onChangeText={(text) => setSalary(text)}
      />
      <Button icon="upload" mode="contained" theme={theme} onPress={() => setModal(true)}>
        Upload Image
      </Button>
      <Button icon="content-save" mode="contained" theme={theme} onPress={() => console.log("saved")}>
        Save
      </Button>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modalButtonView}>
            <Button
              icon="camera"
              theme={theme}
              mode="contained"
              onPress={() => console.log("presses")}
            >
              Camera
            </Button>
            <Button
              icon="image-area"
              mode="contained"
              theme={theme}
              onPress={() => console.log("presses")}
            >
              Gallery
            </Button>
          </View>
          <Button
          theme={theme}
            onPress={() => setModal(false)}
          >
            Cancel
          </Button>
        </View>
      </Modal>
    </View>
  );
};

const theme = {
  colors: {
    primary: "#006aff",
  },
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
  modalView: {
    position: "absolute",
    bottom: 2,
    width: "100%",
    backgroundColor: "white",
  },
  modalButtonView: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default CreateEmployee;
