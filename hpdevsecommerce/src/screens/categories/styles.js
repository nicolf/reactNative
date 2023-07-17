import { StyleSheet } from 'react-native';
import { COLORS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background
  },
  categoryContainer: {
    marginHorizontal: 15,
    marginTop: 15
  },
  categoryItemLandscape: {
    height: 100
  },
  listCategory: {
    gap: 15,
    paddingBottom: 20
  }
});

export default styles;
