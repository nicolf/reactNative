import { ActivityIndicator, FlatList, View } from 'react-native';
import { CategoryItem, Header } from '../../components';
import styles from './styles';
import { ORIENTATION } from '../../constants/orientation';
import useOrientation from '../../hooks/useOrientation';
import { useSelector } from 'react-redux';
import { useGetCategoriesQuery } from '../../store/categories/api';
import { COLORS } from '../../themes';

const Categories = ({ navigation, route }) => {
  const orientation = useOrientation();
  const onSelectCategory = ({ categoryId, color, name }) => {
    navigation.navigate('Products', { categoryId, color, name });
  };
  const { data, error, isLoading } = useGetCategoriesQuery();
  return (
    <View  style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CategoryItem
              {...item}
              onSelectCategory={() =>
                onSelectCategory({ categoryId: item.id, color: item.backgroundColor, name: item.name })
              }
              style={orientation === ORIENTATION.LANDSCAPE ? styles.categoryItemLandscape : {}}
            />
          )}
          keyExtractor={(item) => item.id}
          style={styles.categoryContainer}
          contentContainerStyle={styles.listCategory}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View >
  );
};

export default Categories;
