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
  },
  products: {
    flex: 1
  },
  notFound: {
    flex: 1,
    alignItems: 'center'
  },
  notFoundText: {
    flex: 1,
  }
});

export default styles;
