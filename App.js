import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView
} from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function inputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addButtonHandler() {
    setCourseGoals([...courseGoals, enteredGoal]);
    setEnteredGoal("");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          value={enteredGoal}
          style={styles.input}
          onChangeText={inputHandler}
        />
        <Button title="Add" onPress={addButtonHandler} />
      </View>
      <ScrollView>
        <View>
          {courseGoals.map(goal => (
            <View style={styles.listItem}>
              <Text key={goal}>{goal}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    margin: 40
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderColor: "black",
    borderWidth: 1,
    width: "90%"
  }
});
