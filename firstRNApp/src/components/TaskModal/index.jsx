import { Modal, View, Text, Button } from 'react-native';
import { styles } from './styles';
const TaskModal = ({ isVisible, selectedTask, setIsVisible, onHandleDelete }) => (
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
);

export default TaskModal;
