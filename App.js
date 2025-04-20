import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  StatusBar,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoal, setCourseGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function inputTextHandler(enteredGoal) {
    setCourseGoal(enteredGoal);
  }

  function buttonPressedHandler() {
    setCourseGoals((previousGoals) => [
      ...previousGoals,
      { text: courseGoal, id: Math.random().toString() },
    ]);

    setCourseGoal("");
    closeAddNewHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function addNewGoalHandler() {
    setIsModalVisible(true);
  }

  function closeAddNewHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#bf9deb"
          onPress={addNewGoalHandler}
        />
        <GoalInput
          onButtonPressed={buttonPressedHandler}
          onTextChanged={inputTextHandler}
          inputValue={courseGoal}
          isVisible={isModalVisible}
          onCancelPressed={closeAddNewHandler}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 16,
    marginRight: 16,
  },

  listContainer: {
    flex: 10,
    paddingTop: 24,
  },

  listTitle: {
    marginBottom: 20,
    fontWeight: 700,
  },
});
