import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,ImageBackground
} from 'react-native';


const Cadaster = () => {
  const [usuario, setUsuario] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCPF] = useState('');
  const [email, setEmail] = useState('');
  const [curso, setCurso] = useState('');
  const [senha, setSenha] = useState('');

  const navigation = useNavigation();

  const imagemfundo = {uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/45e4d1172166543.647a452e2e470.png'};

  const handleCadastro = () => {
    navigation.navigate('login');
  };

  return (
    <ImageBackground source={imagemfundo} resizeMode="cover" style={{flex: 1,
      justifyContent: 'center'}}>
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        placeholderTextColor={'#3AE880'}
        value={usuario}
        onChangeText={setUsuario}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor={'#3AE880'}
        value={senha}
        onChangeText={setSenha}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor={'#3AE880'}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor={'#3AE880'}
        type="cel-phone"
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) ',
        }}
        value={telefone}
        onChangeText={setTelefone}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        placeholderTextColor={'#3AE880'}
        type="cpf"
        value={cpf}
        onChangeText={setCPF}
      />

      

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Salvar!</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#3AE880',
    borderRadius: 35,
    paddingTop: 10,
    paddingLeft: 25,
    marginVertical: 10,
    width: '80%',
    color: 'white',
  },
  button: {
    marginTop: 50,
    backgroundColor: '#3AE880',
    borderRadius: 35,
    padding: 10,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Cadaster;
