import {
  TextInput,
  Button,
  StyleSheet,
  View,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput({ addGoalHandler, closeAddGoalModal, modalIsVisible }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles?.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles?.buttonContainer}>
          <View style={styles?.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                setEnteredGoalText("");
                addGoalHandler(enteredGoalText);
                closeAddGoalModal();
              }}
              color="#b180f0"
            />
          </View>
          <View style={styles?.button}>
            <Button
              title="Cancel"
              onPress={() => {
                closeAddGoalModal();
              }}
              color="#f31282"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 8,
    width: 100,
  },
});

export default GoalInput;
