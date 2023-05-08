import { SafeAreaView, Text } from "react-native"
import * as SecureStore from "expo-secure-store"
import { useEffect, useState } from "react"

const Home = () => {
  const [login, setLogin] = useState({ username: "", password: "" })

  async function getValueFor(key) {
    let username = await SecureStore.getItemAsync(key.username)
    let password = await SecureStore.getItemAsync(key.password)

    console.log(`Value for ${key.username}: ${username}`)
    console.log(`Value for ${key.password}: ${password}`)

    if (username && password) {
      setLogin({ username, password })
    } else {
      console.error("No values stored under the keys ", key)
    }
  }

  useEffect(() => {
    getValueFor({ username: "username", password: "password" })
  }, [])

  return (
    <SafeAreaView>
      <Text>
        Username: {login.username}
        {`\n`}
        Password: {login.password}
      </Text>
    </SafeAreaView>
  )
}

export default Home
