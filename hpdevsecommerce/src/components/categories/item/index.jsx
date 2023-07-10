import { TouchableHighlight, ImageBackground, Text } from 'react-native';
import { COLORS } from '../../../themes';
import { styles } from './styles';

const CategoryItem = ({ name, id, backgroundColor, backgroundImage, onSelectedCategory }) => {
  return (
    <TouchableHighlight underlayColor={COLORS.primary} onPress={() => onSelectedCategory(id)} style={[styles.container, { backgroundColor }]}>
      <ImageBackground source={{ uri: backgroundImage }} style={styles.imageBackground} resizeMode="cover">
        <Text style={styles.categoryName}>{name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default CategoryItem;
