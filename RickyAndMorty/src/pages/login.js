import React from "react";
import { View , StyleSheet, TextInput } from 'react-native';

export default function Login ({}){
    return (
        <View style={styles.container}>
        <View >
        </View>    
          <TextInput
          style = {styles.input}
          placeholder = 'E-mail'
          />
           <TextInput
          style = {styles.input}
          placeholder = 'Password'
          />
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      borderWidth: 1,
      borderColor: 'black',
      color: 'black',
      borderRadius: 180,
      padding: 15,
      margin: 10,
      width: '80%',
    },  
  })