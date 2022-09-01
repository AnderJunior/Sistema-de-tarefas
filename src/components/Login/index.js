import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function Login(props) {
  const [type, setType] = useState('login');

  const [email, setEmail] = useState('');
  const [passowrd, setPassowrd] = useState('');

  //Função de login
  function handleLogin() {
    if (email === '' && passowrd === '') {
      props.data('Logado');
      console.log('Logou!');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Seu Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        placeholder="********"
        style={styles.input}
        value={passowrd}
        onChangeText={(text) => setPassowrd(text)}
      />

      <TouchableOpacity //Caso o type for igual a login, o botão fica com o texto acessar
        style={[
          styles.button,
          { backgroundColor: type === 'login' ? '#3ea6d2' : '#141414' },
        ]} //Pasando mais um estilo com condicional
        onPress={handleLogin}>
        <Text style={styles.buttonText}>
          {type === 'login' ? 'Acessar' : 'Cadastrar'} 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          setType((type) => (type === 'login' ? 'cadastrar' : 'login')) 
        }>
        <Text style={{ textAlign: 'center' }}>
          {type === 'login' ? 'Criar Conta' : 'Fazer Login'} 
        </Text>
      </TouchableOpacity>

      <View style={styles.areaHeader}>
        <Image
          style={{ width: 60, height: 60 }}
          source={require('../../assets/logoAnalise.png')}
        />

        <View style={styles.areaTextEmpresa}>
          <Text style={styles.textEmpresa}>Analis</Text>
          <Text style={styles.textEmpresa2}>Code</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 140,
    backgroundColor: '#f2f6fc',
    paddingHorizontal: 10,
  },
  input: {
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    marginBottom: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
  },
  areaHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -280,
    paddingBottom: 10,

  },
  areaTextEmpresa: {
    flexDirection: 'row',
    padding: 5,
  },
  textEmpresa2: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textEmpresa: {
    color: '#ff0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
