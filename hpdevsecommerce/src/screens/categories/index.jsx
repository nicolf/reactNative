import { SafeAreaView, FlatList, View } from 'react-native';
import { CategoryItem, Header } from '../../components';
import styles from './styles';
import CATEGORIES from '../../constants/data/categories.json';

const Categories = ({onSelectedCategory}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        
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

export default Categories;