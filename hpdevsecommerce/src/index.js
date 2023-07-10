import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import { CategoryItem, Header } from './components';
import CATEGORIES from './constants/data/categories.json';

export default function App() {
  const onSelectedCategory = (categoryId) => {
    console.warn({categoryId})
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Categories" />
        <FlatList
          data={CATEGORIES}
          renderItem={({ item }) => <CategoryItem {...item} onSelectedCategory={onSelectedCategory} />}
          keyExtractor={(item) => item.id}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  categoryContainer: {
    marginHorizontal: 15,
    marginTop: 15
  },  
  listCategory: {
    gap: 15,
    paddingBottom: 20
  }
});
