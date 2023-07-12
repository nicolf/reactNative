import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15
  },
  header: {
    flexDirection: 'row',
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
    color: COLORS.text,
    fontFamily: FONTS.regular
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
    fontFamily: FONTS.regular
  },
  productsContent: {
    paddingVertical: 25,
    gap: 15
  },
  productContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 10,
    width: '45%',
    marginHorizontal: 10
  },
  productImage: {
    width: '100%',
    height: 150
  },
  productDetail: {
    padding: 10,
    gap: 5
  },
  productName: {
    fontSize: 14,
    fontFamily: FONTS.regular
  },
  productPrice: {
    fontSize: 15,
    fontFamily: FONTS.bold
  }
});

export default styles;
