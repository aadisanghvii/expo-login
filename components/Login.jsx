import {
  Inter_400Regular,
  Inter_600SemiBold,
  useFonts,
} from "@expo-google-fonts/inter"
import * as Haptics from "expo-haptics"
import { Formik } from "formik"
import {
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native"

import { getValueFor, save } from "../hooks/useStore"
import { cn } from "../lib/utils"
import { loginSchema } from "./schemas/loginSchema"

const onSubmit = (values, actions) => {
  actions.resetForm()

  save("username", values.username)
  save("password", values.password)

  getValueFor("username")
  getValueFor("password")
}

const LoginScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        className="items-center justify-center min-h-screen align-middle bg-white/40"
        // behavior="height"
      >
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            values,
            errors,
            touched,
          }) => (
            <>
              <Text
                style={{ fontFamily: "Inter_600SemiBold" }}
                className="text-xl right-10 text-secondary"
              >
                Login to your account
              </Text>

              <TextInput
                name="username"
                style={{ fontFamily: "Inter_400Regular" }}
                placeholder="Username"
                placeholderTextColor={"#BCB8B1"}
                className={cn(
                  "items-center justify-center h-12 p-2 pt-0 m-2 text-lg align-middle bg-white shadow-sm rounded-xl w-72 text-tertiary focus:shadow-primary focus:shadow-md ",
                  errors.username &&
                    touched.username &&
                    values.username !== "" &&
                    "border-accent border-[1px]"
                )}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                keyboardType="number-pad"
                keyboardAppearance="dark"
                onFocus={() => {
                  Haptics.selectionAsync()
                }}
                blurOnSubmit={true}
                maxLength={6}
              />

              {errors.username &&
                touched.username &&
                values.username !== "" && (
                  <Text
                    className="text-accent"
                    style={{ fontFamily: "Inter_400Regular" }}
                  >
                    {errors.username}
                  </Text>
                )}
              <TextInput
                name="password"
                style={{ fontFamily: "Inter_400Regular" }}
                placeholder="Password"
                placeholderTextColor={"#BCB8B1"}
                className={cn(
                  "items-center justify-center h-12 p-2 pt-0 m-2 text-lg align-middle bg-white shadow-sm rounded-xl w-72 text-tertiary focus:shadow-primary focus:shadow-md ",
                  errors.password &&
                    touched.password &&
                    values.password !== "" &&
                    "border-accent border-[1px]"
                )}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={true}
                keyboardAppearance="dark"
                onFocus={() => {
                  Haptics.selectionAsync()
                }}
                blurOnSubmit={true}
                returnKeyType="done"
                enablesReturnKeyAutomatically={true}
                maxLength={52}
              />

              {errors.password &&
                touched.password &&
                values.password !== "" && (
                  <Text
                    className="text-accent"
                    style={{ fontFamily: "Inter_400Regular" }}
                  >
                    {errors.password}
                  </Text>
                )}

              <Pressable
                onPress={() => {
                  handleSubmit()
                  Haptics.notificationAsync(
                    Haptics.NotificationFeedbackType.Success
                  )
                  navigation.navigate("Home")
                }}
                className="justify-center h-12 p-2 m-2 shadow-md rounded-xl bg-accent w-72 shadow-accent/60 "
                disabled={
                  errors.username ||
                  errors.password ||
                  isSubmitting ||
                  values.username === "" ||
                  values.password === ""
                }
                hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
              >
                <Text
                  className="text-lg text-center text-primary"
                  style={{ fontFamily: "Inter_600SemiBold" }}
                >
                  SIGN IN
                </Text>
              </Pressable>
            </>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen
