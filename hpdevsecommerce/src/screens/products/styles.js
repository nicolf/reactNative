import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    gap: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.text
  }
});

export default styles;
