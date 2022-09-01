import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
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

      <TouchableOpacity
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
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
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
  },
});
