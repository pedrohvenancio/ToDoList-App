import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [taskItems, setTaskItems] = useState([]);

  const handleAddtask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, tasks]);
    setTasks(null);
  }

  const completTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.tasksbox}>
        <Text style={styles.taskstext}>Today's tasks</Text>

        <View style={styles.taskstask}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => completTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              )

            })
          }

        </View>
    
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios'? 'padding' : 'height'}
        style={styles.writeTask}
      >

        <TextInput style={styles.input} placeholder={'Write a task'} 
        onChangeText={text => setTasks(text)}
        value={tasks}/>

        <TouchableOpacity onPress={() => handleAddtask()}>
          <View style={styles.add}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  tasksbox:{
    paddingTop:80,
    paddingHorizontal: 20,
  },
  taskstext: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskstask:{
    marginTop: 15,
  },
  writeTask:{
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width:250,
    borderRadius: 60,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  add: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    borderWidth: 1,    
    justifyContent: 'center',
    alignItems: 'center',

  },
  addText: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});
