import { useFonts } from 'expo-font';
import { StyleSheet, View, Text, Button, ActivityIndicator } from 'react-native';
import { COLORS, FONTS } from './themes';
import { Provider } from 'react-redux';
import RootNavigator from './navigations';
import { store } from './store';
import { init } from './db';

init()
  .then(() => {
    console.log('Initialized database.');
  })
  .catch((err) => {
    console.log('Initializing db failed!');
    console.log(err);
  });

export default function App() {
  const [loaded] = useFonts({
    [FONTS.regular]: require('../assets/fonts/Poppins-Regular.ttf'),
    [FONTS.bold]: require('../assets/fonts/Poppins-Bold.ttf'),
    [FONTS.medium]: require('../assets/fonts/Poppins-Medium.ttf'),
    [FONTS.light]: require('../assets/fonts/Poppins-Light.ttf')
  });

  if (!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size="large" />
        <Text>Loading fonts</Text>
      </View>
    );
  }
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </Provider>
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
