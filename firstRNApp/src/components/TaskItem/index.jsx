import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
const TaskItem = ({ item, onPressItem }) => (
  <TouchableOpacity onPress={() => onPressItem(item)} style={styles.containerItem}>
    <Text style={styles.listItem}>{item.value}</Text>
    <Text style={styles.icon}>X</Text>
  </TouchableOpacity>
);

export default TaskItem;
