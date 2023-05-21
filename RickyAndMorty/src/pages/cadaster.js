import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
const Cadaster = () => {
  const [usuario, setusuario] = useState("");
  const [telefone, settelefone] = useState("");
  const [cpf, setcpf] = useState("");
  const [email, setEmail] = useState("");
  const [Curso, setCurso] = useState("");
  const [Senha, setSenha] = useState("");

  const navigation = useNavigation();

  const Verificacion = () => {
    return (
        <View>
          
          <TouchableOpacity style={styles.Button} onPress={handleLogin}>
            <Text style={styles.TextButton}>Registrar mais um</Text>
          </TouchableOpacity>
        </View>
      );
  };

  const handleLogin = () => {
    navigation;
  };
  return (
    <View style={styles.ctnCadaster}>
      <TextInput
        style={styles.Input}
        placeholder="Usuário"
        placeholderTextColor={"black"}
        value={usuario}
        onChangeText={setusuario}
      />
      <TextInput
        style={styles.Input}
        placeholder="Telefone"
        placeholderTextColor={"black"}
        secureTextEntry={true}
        value={telefone}
        onChangeText={settelefone}
      />
      <TextInput
        style={styles.Input}
        placeholder="CPF"
        placeholderTextColor={"black"}
        secureTextEntry={true}
        value={cpf}
        onChangeText={setcpf}
      />
      <TextInput
        style={styles.Input}
        placeholder="E-mail"
        placeholderTextColor={"black"}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.Input}
        placeholderTextColor={"black"}
        placeholder="Curso"
        value={Curso}
        onChangeText={setCurso}
      />
      <TextInput
        style={styles.Input}
        placeholderTextColor={"black"}
        placeholder="Senha"
        secureTextEntry={true}
        value={Senha}
        onChangeText={setSenha}
      />

      <Verificacion />
    </View>
  );
};

const styles = StyleSheet.create({
  ctnCadaster: {
    alignItems: "center",
    justifyContent: "center",
  },
  Input: {
    borderWidth: 1,
    borderColor: "black",
    color: "white",
    padding: 15,
    margin: 10,
    width: "85%",
    borderRadius: 180,
  },
  Button: {
    marginTop: 45,
    backgroundColor: "black",
    padding: 15,
    width: "100%",
    borderRadius: 180,
    alignItems: "center",
  },
  TextButton: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Cadaster;
