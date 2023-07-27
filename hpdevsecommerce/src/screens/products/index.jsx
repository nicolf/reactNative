import { useState } from 'react';
import { View, Text, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { Input } from '../../components';
import { COLORS } from '../../themes';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const Products = ({ navigation, route }) => {
  const { categoryId, color } = route.params;
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [borderColor, setBorderColor] = useState(COLORS.primary);
  const products = useSelector((state) => state.products.data);
  const onHandleBlur = () => {};
  const onHandleChangeText = (text) => {
    setSearch(text);
    filterBySearch(text);
  };
  const onHandleFocus = () => {};

  const filteredProductsByCategory = products.filter((product) => product.categoryId === categoryId);

  const filterBySearch = (query) => {
    let updatedProductList = [...filteredProductsByCategory];

    updatedProductList = updatedProductList.filter((product) => {
      return product.name.toLowerCase().indexOf(query.toLowerCase()) != -1;
    });

    setFilteredProducts(updatedProductList);
  };

  const clearSearch = () => {
    setSearch('');
    setFilteredProducts([]);
  };

  const onSelectProduct = ({ productId, name, color }) => {
    navigation.navigate('ProductDetail', { productId, name, color });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Input
          onHandleBlur={onHandleBlur}
          onHandleChangeText={onHandleChangeText}
          onHandleFocus={onHandleFocus}
          value={search}
          placeholder="Search"
          borderColor={borderColor}
        />
        {search.length > 0 && <Ionicons onPress={clearSearch} name="close" size={30} color={COLORS.black} />}
      </View>
      <FlatList
        style={styles.products}
        data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onSelectProduct({ productId: item.id, name: item.name, color: color })}
            style={styles.productContainer}
          >
            <ImageBackground
              source={{ uri: item.image }}
              style={[styles.productImage, { backgroundColor: color }]}
              resizeMethod="resize"
              resizeMode="contain"
            />
            <View style={styles.productDetail}>
              <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </Text>
              <Text style={styles.productPrice}>{`${item.currency.code} ${item.price}`}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.productsContent}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      {filteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}>No products found</Text>
        </View>
      )}
    </View>
  );
};

export default Products;
