import { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Input } from '../../components';
import { COLORS } from '../../themes';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
import PRODUCTS from '../../constants/data/products.json';
import { FlatList } from 'react-native';

const Products = ({ onHandleGoBack, categoryId }) => {
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [borderColor, setBorderColor] = useState(COLORS.primary);
  const onHandleBlur = () => {};
  const onHandleChangeText = (text) => {
    setSearch(text);
    filterBySearch(text);
  };
  const onHandleFocus = () => {};

  const filteredProductsByCategory = PRODUCTS.filter((product) => product.categoryId === categoryId);

  const filterBySearch = (query) => {
    let updatedProductList = [...filteredProductsByCategory]
    
    updatedProductList = updatedProductList.filter((product) => {
      return product.name.toLowerCase().indexOf(query.toLowerCase()) != -1
    })

    setFilteredProducts(updatedProductList)
  }

  const clearSearch = () => {
    setSearch('');
    setFilteredProducts([]);
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
        <Ionicons name="arrow-back" size={30} color={COLORS.black} />
        <Text style={styles.goBackText}>Go back</Text>
      </TouchableOpacity>
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
        data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      {filteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.notFound}><Text style={styles.notFoundText}>No products found</Text></View>
      )}
    </View>
  );
};

export default Products;
