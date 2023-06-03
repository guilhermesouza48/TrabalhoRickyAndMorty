import React, {Component, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const imagemfundo = {
  uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/45e4d1172166543.647a452e2e470.png',
};

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  const handleLogin = () => {
    if (!usuario) {
      alert('Eiiii Pilantra!!! Usuário incorreto!');
    } else if (!senha) {
      alert('Eiiii Pilantra!!! Senha incorreta!');
    } else {
      navigation.navigate('main');
    }
  };

  const handleCadaster = () => {
    navigation.navigate('cadaster');
  };

  return (
    <ImageBackground
      source={imagemfundo}
      resizeMode="cover"
      style={{flex: 1, justifyContent: 'center'}}>
      <View style={styles.container}>
        <Text style={styles.Text1}>Usuário</Text>
        <TextInput
          style={styles.input}
          value={usuario}
          onChangeText={setUsuario}
        />
        <Text style={styles.Text2}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.button1} onPress={handleLogin}>
          <Text style={styles.buttonText1}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleCadaster}>
          <Text style={styles.buttonText2}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text1: {
    color: '#3AE880',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 2,
    borderColor: '#3AE880',
    borderRadius: 30,
    paddingTop: 10,
    marginVertical: 10,
    paddingLeft: 15,
    width: '80%',
    color: 'white',
  },
  Text2: {
    color: '#3AE880',
    fontWeight: 'bold',
    marginTop: 20,
  },
  button1: {
    marginTop: 50,
    backgroundColor: '#3AE880',
    borderRadius: 35,
    padding: 10,
    width: '40%',
    alignItems: 'center',
    margin: 5,
  },
  button2: {
    marginTop: 10,
    backgroundColor: 'transparent',
    borderRadius: 35,
    padding: 10,
    width: '40%',
    alignItems: 'center',
    margin: 5,
  },
  buttonText1: {
    color: 'black',
    fontWeight: 'bold',
  },
  buttonText2: {
    color: '#3AE880',
    fontWeight: 'bold',
  },
});

export default Login;
