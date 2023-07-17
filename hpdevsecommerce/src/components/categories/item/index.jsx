import { TouchableHighlight, ImageBackground, Text, useWindowDimensions } from 'react-native';
import { COLORS } from '../../../themes';
import { styles } from './styles';

const CategoryItem = ({ name, id, backgroundColor, backgroundImage, onSelectedCategory }) => {
  const { width, height } = useWindowDimensions();
  const isTablet = width > 650;
  return (
    <TouchableHighlight
      underlayColor={COLORS.primary}
      onPress={() => onSelectedCategory(id)}
      style={[styles.container, { backgroundColor }]}
    >
      <ImageBackground
        source={{ uri: backgroundImage }}
        style={isTablet ? styles.imageBackgroundTablet : styles.imageBackground}
        resizeMode={isTablet ? 'resize' : 'cover'}
      >
        <Text style={isTablet ? styles.categoryNameTablet : styles.categoryName}>{name}</Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};

export default CategoryItem;
