import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View>
      <View> 
        <TextInput placeholder="Your Goals"/>
      <Button title="Add Goal"/>
      </View>
      <View>
        <Text>
          List of Goals
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
