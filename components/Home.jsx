import { SafeAreaView, Text } from "react-native";
import * as SecureStore from "expo-secure-store";

import { useState } from "react";

const Home = () => {
  const [result, setResult] = useState("");

  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    console.log(`Value for ${key}: ${result}`);

    if (result) {
      setResult(result);
    } else {
      console.error("No values stored under the key ", key);
    }
  }

  getValueFor("username");

  return (
    <SafeAreaView>
      <Text>{result}</Text>
    </SafeAreaView>
  );
};

export default Home;
