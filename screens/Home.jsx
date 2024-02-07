import { Button, Image, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Home({navigation}) {
  return (
      <SafeAreaView style={{flex: 1, backgroundColor: "#6832a8"}}>
        <View style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            flex: 1,
            justifyContent: "center",
            alignItems: 'center',
            my: 4
        }}>
        <Text style={styles.headingText}>Let's Get Started!</Text>
        <View>
            <Image source={require("../assets/welcome.png")} style={{width: 350, height: 350}} />
        </View>
        <View style={{width: "70%"}}>
            <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('signup')}>
                <Text style={styles.btnText} >Sign Up</Text>
            </TouchableOpacity>
            <View style={{flexDirection: "row", justifyContent: "center", marginTop: 10}}>
                <Text style={styles.text}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("login")}>
                    <Text style={[styles.text, styles.text2]}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headingText: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    },
    btn: {
        backgroundColor: "yellow",
        padding: 8,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    btnText: {
        fontSize: 17,
        fontWeight: "bold"
    },
    text: {
        color: "white",
        fontSize: 13
    },
    text2: {
        fontWeight: "bold",
        color: "yellow"

    }
})