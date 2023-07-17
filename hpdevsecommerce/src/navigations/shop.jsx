import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Categories, Products, ProductDetail } from '../screens';
import { CardStyleInterpolators } from '@react-navigation/stack';
import { COLORS, FONTS } from '../themes';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      screenOptions={{
        presentation: 'modal',
        headerStyle: {
          backgroundColor: COLORS.primary
        },
        headerTitleStyle: {
          fontfamily: FONTS.bold,
          fontSize: 16
        },
        headerTintColor: COLORS.white,
        CardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        presentation: 'card',
        animation: 'fade_from_bottom'
      }}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({ navigationBarColor, route }) => ({
          headerStyle: {
            backgroundColor: route.params.color
          },
          title: route.params.name
        })}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ navigationBarColor, route }) => ({
          headerStyle: {
            backgroundColor: route.params.color
          },
          title: route.params.name
        })}
      />
    </Stack.Navigator>
  );
}

export default ShopNavigator;
