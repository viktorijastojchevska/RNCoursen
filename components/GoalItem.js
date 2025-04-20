import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ id, text, onDelete }) {
  return (
    <Pressable
      onPress={() => onDelete(id)}
      android_ripple={{ color: "#210644" }}
      style={({ pressed }) => [styles.listItem, pressed && styles.pressedItem]}
    >
      <Text style={styles.listText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    padding: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
  },
  pressedItem: {
    opacity: 0.75,
  },
  listText: {
    color: "white",
  },
});

export default GoalItem;
