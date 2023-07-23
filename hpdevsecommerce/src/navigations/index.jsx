import { NavigationContainer } from '@react-navigation/native';

import ShopNavigator from './shop';
import TabsNavigator from './tabs';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
