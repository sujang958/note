import React from "react"
import { KeyboardAvoidingView, View } from "react-native"
import { Entypo } from "@expo/vector-icons"
import { TextInput } from "react-native-gesture-handler"
import Text from "../components/text"
import { homeContainer } from "../styles/container"
import { homeText } from "../styles/text"

const Home = () => {
  return (
    <View style={homeContainer.container}>
      <View style={homeContainer.header}>
        <View style={homeContainer.headerText}>
          <View>
            <Text style={homeText.headerTitle}>Notes</Text>
          </View>
          <View>
            <Text>hi</Text>
            <Entypo name="light-up" size={48} color="black" />
          </View>
        </View>
        <TextInput
          style={homeContainer.searchInput}
          keyboardAppearance="dark"
        />
      </View>
      <View style={homeContainer.body}></View>
      <View style={homeContainer.footer}></View>
    </View>
  )
}

export default Home
