import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 0.95,
    color: '#220901',
    height: 40,
    fontSize: 14
  }
});
