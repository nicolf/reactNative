import { useFonts } from 'expo-font';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';
import { Categories, Products } from './screens';
import { Header } from './components';
import { COLORS, FONTS } from './themes';

export default function App() {
  const [loaded] = useFonts({
    [FONTS.regular]: require('../assets/fonts/Poppins-Regular.ttf'),
    [FONTS.bold]: require('../assets/fonts/Poppins-Bold.ttf'),
    [FONTS.medium]: require('../assets/fonts/Poppins-Medium.ttf'),
    [FONTS.light]: require('../assets/fonts/Poppins-Light.ttf')
  });
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const headerTitle = isCategorySelected ? 'Products' : 'Categories';
  const onHandleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setIsCategorySelected(!isCategorySelected);
  };
  const onHandleNavigate = () => {
    setIsCategorySelected(!isCategorySelected);
    setSelectedCategory(null);
  };

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
        <Text>Loading fonts</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title={headerTitle} />
        {isCategorySelected ? (
          <Products onHandleGoBack={onHandleNavigate} categoryId={selectedCategory} />
        ) : (
          <Categories onSelectedCategory={onHandleSelectCategory} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
