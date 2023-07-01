import { FlatList } from 'react-native';
import { styles } from './styles';
const TaskList = ({ tasks, renderItem }) => (
  <FlatList
    data={tasks}
    renderItem={renderItem}
    style={styles.listContainer}
    contentContainerStyle={styles.list}
    keyExtractor={(item) => item.id}
  />
);

export default TaskList;
