import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput({
  onButtonPressed,
  onTextChanged,
  inputValue,
  isVisible,
  onCancelPressed,
}) {
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          value={inputValue}
          style={styles.inputText}
          placeholder="Your course goal!"
          onChangeText={onTextChanged}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={onButtonPressed}
              color="#bf9deb"
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="grey" onPress={onCancelPressed} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    flex: 1,
    backgroundColor: "#38067a",
  },
  inputText: {
    width: "100%",
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#dfcef5",
    borderRadius: 6,
    backgroundColor: "#dfcef5",
    color: "#1c033d",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  button: {
    width: "30%",
    marginHorizontal: 8,
  },

  image: {
    width: 130,
    height: 130,
    marginBottom: 20,
  },
});
export default GoalInput;
