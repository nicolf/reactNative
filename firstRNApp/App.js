import { Text, View, TextInput, Button, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [borderColor, setBorderColor] = useState('#621708');

  const handleBorderOnFocus = () => {
    setBorderColor('#BC3908');
  };

  const handleBorderOnBlur = () => {
    setBorderColor('#621708');
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
          />
          <Button title="Create" color="#F6AA1C" />
        </View>
      </View>
    </SafeAreaView>
  );
}
