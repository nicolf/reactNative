import { Text, View, Button, SafeAreaView, FlatList, Modal } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { InputTask, TaskItem, TaskList, TaskModal } from './components';

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

  const renderItem = ({ item }) => <TaskItem item={item} onPressItem={onHandlerModal} />;

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
        <InputTask
          borderColor={borderColor}
          handleBorderOnFocus={handleBorderOnFocus}
          handleBorderOnBlur={handleBorderOnBlur}
          onHandlerChangeText={onHandlerChangeText}
          task={task}
          onHandlerCreateTask={onHandlerCreateTask}
        />
        <TaskList tasks={tasks} renderItem={renderItem} />
        <TaskModal
          isVisible={isVisible}
          selectedTask={selectedTask}
          setIsVisible={setIsVisible}
          onHandleDelete={onHandleDelete}
        />
      </View>
    </SafeAreaView>
  );
}
