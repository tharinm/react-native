import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [addList, setAddList] = useState("");

  console.log(goals);

  const handleAddGoal = () => {
    setGoals([...goals, addList]);
    setAddList(""); // Clear the input field after adding a goal
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Goals"
          style={styles.textInput}
          onChangeText={(text) => setAddList(text)} // Update addList here
          value={addList} // Bind the input value to addList
        />
        <Button
          title="Add Goal"
          onPress={handleAddGoal}
          style={styles.button}
        />
      </View>
      <View>
        <ScrollView>
          {goals.map((val, key) => {
            return (
              <View key={key} style={styles.list}>
                <Text>{val}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    padding: 10,
    marginRight: 12,
  },
  button: {
    backgroundColor: "green",
    alignSelf: "center",
    color: "yellow",
  },
  list: {
    marginTop: 20,
    padding: 10,
    width: "100%",
    backgroundColor: "skyblue",
    borderRadius: 8,
  },
});
