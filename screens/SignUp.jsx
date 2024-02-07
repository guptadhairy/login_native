import { Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {ArrowLeftIcon} from "react-native-heroicons/solid"
import { Button } from 'react-native-paper'

export default function SignUp({navigation}) {
  return (
    <View style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex: 1, backgroundColor: "#6832a8"}} >
      <SafeAreaView>
        <View style={{ justifyContent: "flex-start", flexDirection: "row", paddingLeft: 10}}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
                <ArrowLeftIcon size={"25"} color={"white"} />
            </TouchableOpacity>
        </View>
        <View style={{flexDirection: "row", justifyContent: "center"}}>
            <Image source={require("../assets/signup.png")} style={{width: 380, height: 300}} />
        </View>
      </SafeAreaView>
      <View style={{
        backgroundColor: "white",
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 18,
        paddingTop: 8,
        marginTop: 30,
        gap: 10
        
      }}>
        <Text style={{marginTop: 40, marginLeft: 6, fontWeight: "bold"}}>Enter Name</Text>
        <TextInput style={{
            backgroundColor: "#949c99",
            padding: 8,
            borderRadius: 10,
            color: "white"
        }} />
        <Text style={{ marginLeft: 6, fontWeight: "bold"}}>Email Address</Text>
        <TextInput style={{
            backgroundColor: "#949c99",
            padding: 8,
            borderRadius: 10,
            color: "white"
        }} />
        <Text style={{ marginLeft: 6, fontWeight: "bold"}}>Password</Text>
        <TextInput secureTextEntry style={{
            backgroundColor: "#949c99",
            padding: 8,
            borderRadius: 10,
            color: "white",
        }} />
        <TouchableOpacity style={{marginTop: 20}}>
            <Button style={styles.btn}>
                <Text style={{color: "black"}}>Sign Up</Text>
            </Button>
        </TouchableOpacity>
        <View style={{flex: 1, flexDirection: "row", justifyContent: "center"}}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={()=> navigation.navigate("login")}>
            <Text style={{fontWeight: "bold"}}> LogIn</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "#ffd35c",
    }
})