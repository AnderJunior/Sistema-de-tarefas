import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import Login from './src/components/Login';
import TaskList from './src/components/TaskList';

export default function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');

  //Função para deletar a tarefa
  function handleDelete(key) {
    const finTasks = tasks.filter((item) => item.key !== key);
    setTasks(finTasks);
  }

  //Função para adicionar alguma tarefa
  function handleAdd() {
    if (newTask === '') {
      return;
    }
    const keyIndex = tasks.length + 1; //Falo que a key é igual ao tamnho da array + 1
    setTasks((oldTasks) => [...oldTasks, { key: keyIndex, nome: newTask }]); //Adiciono ele aqui
    setNewTask(''); //Apagar o input depois que apertar no +
  }

  // Função para clicar na tabela
  function handleEdit(data) {
    console.log('ITEM CLICADO', data);
  }

  // Função para voltar para o login
  function handleVoltar(){
    setUser(null);
    setNewTask('');
  }

  if (!user) {
    //Puxa a função de login
    return <Login data={setUser} />;
  }

  return (
    <SafeAreaView style={styles.container}>
    
      <TouchableOpacity style={styles.buttonVoltar} onPress={handleVoltar}>
        <Feather name="arrow-left" color="#000" size={40}/>
      </TouchableOpacity>


      <View style={styles.areaHeader}>
        <Image
          style={{ width: 60, height: 60 }}
          source={require('./src/assets/logoAnalise.png')}
        />

        <View style={styles.areaTextEmpresa}>
          <Text style={styles.textEmpresa}>Analis</Text>
          <Text style={styles.textEmpresa2}>Code</Text>
        </View>
      </View>

      <View style={styles.containerTask}>
        <TextInput
          style={styles.input}
          placeholder="Oque vai fazer hoje ?"
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tasks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <TaskList
            data={item}
            deleteItem={handleDelete}
            editIem={handleEdit}
          />
        )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 10,
    backgroundColor: '#f2f6fc',
  },
  containerTask: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#141414',
    height: 45,
  },
  buttonAdd: {
    backgroundColor: '#141414',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingHorizontal: 18,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
  },
  areaHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -70,
    padding: 10,
  },
  areaTextEmpresa: {
    flexDirection: 'row',
    padding: 10,
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
  buttonVoltar:{
    marginLeft: 10,
    width: 40,
    height: 40,
    marginTop: -30
  }
});
