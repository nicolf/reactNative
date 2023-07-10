import { View, Text, Button } from 'react-native';

const Products = ({onHandleGoBack}) => {
  return (
    <View>
      <Button title="Go back" onPress={onHandleGoBack} />
      <Text>Elegido</Text>
    </View>
  );
};

export default Products;
