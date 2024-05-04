import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { colors, defaultStyle } from '../styles/styles'

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
  return (
    <View style={defaultStyle}>
        <View style={{
            marginBottom: 20
        }}>
            <Text style={styles.heading}>Login</Text>
        </View>

        <View style={styles.container}> </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: "500",
        textAlign: "center",
        backgroundColor: colors.color3,
        color: colors.color2,
        padding: 5,
        borderRadius:5
    },
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: colors.color3,
        borderRadius: 10,
        justifyContent: "center",
        elevation: 10
    }
})

export default Login