import { Button, TextInput, View } from 'react-native';
import { styles } from './styles';

const InputTask = ({
  borderColor,
  handleBorderOnFocus,
  handleBorderOnBlur,
  onHandlerChangeText,
  task,
  onHandlerCreateTask
}) => {
  return (
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
  );
};

export default InputTask;
