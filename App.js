import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import Home from "./components/Home"
import Login from "./components/Login"

const Stack = createNativeStackNavigator()

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
  )
}
