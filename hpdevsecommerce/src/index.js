import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { Categories, Products } from './screens';
import { Header } from './components';

export default function App() {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const headerTitle = isCategorySelected ? 'Products' : 'Category';
  const onHandleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsCategorySelected(!isCategorySelected);
  }
  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(null);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Categories" />
        {isCategorySelected ? <Products onHandleGoBack={onHandleNavigate} /> : <Categories onSelectedCategory={onHandleSelectCategory} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
