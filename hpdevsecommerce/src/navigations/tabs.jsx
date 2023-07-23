import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopNavigator from './shop';
import OrdersNavigator from './orders';
import CartNavigator from './cart';
import { COLORS, FONTS } from '../themes';
import { Ionicons } from '@expo/vector-icons/';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: FONTS.regular,
          fontSize: 10
        },
        tabBarStyle: {
          backgroundColor: COLORS.white
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarIconStyle: {
          fontSize: 22
        }
      }}
    >
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={20} color={color} />
          )
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={20} color={color} />
          ),
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            backgroundColor: COLORS.secondary,
            color: COLORS.black,
            fontFamily: FONTS.regular,
            fontSize: 11
          }
        }}
      />
      <BottomTab.Screen
        name="OrdersrTab"
        component={OrdersNavigator}
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'file-tray' : 'file-tray-outline'} size={20} color={color} />
          )
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
