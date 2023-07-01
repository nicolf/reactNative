import { Text, View, TextInput, Button, SafeAreaView, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [borderColor, setBorderColor] = useState('#621708');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleBorderOnFocus = () => {
    setBorderColor('#BC3908');
  };

  const handleBorderOnBlur = () => {
    setBorderColor('#621708');
  };

  const onHandlerChangeText = (text) => {
    setTask(text);
  };

  const onHandlerCreateTask = () => {
    if (task) {
      setTasks([
        ...tasks,
        {
          id: Date.now().toString(),
          value: task
        }
      ]);

      setTask('');
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => onHandlerModal(item)} style={styles.containerItem}>
      <Text style={styles.listItem}>{item.value}</Text>
      <Text style={styles.icon}>X</Text>
    </TouchableOpacity>
  );

  const onHandlerModal = (item) => {
    setIsVisible(true);
    setSelectedTask(item);
  };

  const onHandleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((tasks) => tasks.id !== id));
    setIsVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, { borderColor: borderColor }]}
            placeholder="add new task"
            autoCapitalize="none"
            autoCorrect={false}
            cursorColor="#F6AA1C"
            selectionColor="#F6AA1C"
            onFocus={handleBorderOnFocus}
            onBlur={handleBorderOnBlur}
            onChangeText={onHandlerChangeText}
            value={task}
          />
          <Button disabled={task.length === 0} title="Create" color="#F6AA1C" onPress={onHandlerCreateTask} />
        </View>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          style={styles.listContainer}
          contentContainerStyle={styles.list}
          keyExtractor={(item) => item.id}
        />
        <Modal visible={isVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Task Detail</Text>
            <View style={styles.modalDetailContainer}>
              <Text style={styles.modalDetailMessage}>Are you sure to delete this item?</Text>
              <Text style={styles.modalSelectedTask}>{selectedTask?.value}</Text>
            </View>
            <View style={styles.modalButtonContainer}>
              <Button title="Cancel" color="#F6AA1C" onPress={() => setIsVisible(false)} />
              <Button title="Delete" color="red" onPress={() => onHandleDelete(selectedTask?.id)} />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
