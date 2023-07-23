import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Orders } from '../screens';
import { COLORS, FONTS } from '../themes';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
        presentation: 'card',
        animation: 'fade_from_bottom'
      }}
    >
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
