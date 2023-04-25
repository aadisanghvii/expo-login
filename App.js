import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { save, getValueFor } from "./hooks/useStore";
import Login from "./components/Login";
import Home from "./components/Home";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            gestureEnabled: false,
            animation: "fade",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
