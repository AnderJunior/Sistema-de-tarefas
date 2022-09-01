import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Login from './src/components/Login';
import TaskList from './src/components/TaskList';

export default function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([
    { key: 1, nome: 'Comprar Coca Cola' },
    { key: 2, nome: 'Estudar JavaScript' },
  ]);

  const [newTask, setNewTask] = useState('');

  //Função para deletar a tarefa
  function handleDelete(key) {
    const finTasks = tasks.filter( item => item.key !== key)
    setTasks(finTasks)
  }

  //Função para adicionar alguma tarefa
  function handleAdd() {
    if (newTask === '') {
      return;
    }
    const keyIndex = tasks.length + 1; //Falo que a key é igual ao tamnho da array + 1
    setTasks(oldTasks => [...oldTasks, { key: keyIndex, nome: newTask }]); //Adiciono ele aqui

  }

  // função para clicar na tabela
  function handleEdit(data) {
    console.log('ITEM CLICADO', data);
  }

  if (!user) { //Puxa a função de login 
    return <Login data={setUser}/>;
  }

  return (
    <SafeAreaView style={styles.container}>
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
    paddingTop: 50,
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
});
