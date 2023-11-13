import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    let randomString = Math.random().toString();
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: randomString, id: randomString },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(
      (currentCourseGoals) => currentCourseGoals
      //currentCourseGoals?.filter((goal) => goal?.id !== id)
    );
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput addGoalHandler={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                id={itemData?.item?.id}
                text={itemData?.item?.text}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
