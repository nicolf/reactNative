import { TouchableHighlight, ImageBackground, Text, useWindowDimensions } from 'react-native';
import { COLORS } from '../../../themes';
import { styles } from './styles';

const CategoryItem = ({ name, id, backgroundColor, backgroundImage, onSelectCategory }) => {
  const { width, height } = useWindowDimensions();
  const isTablet = width > 650;
  return (
    <TouchableHighlight
      underlayColor={COLORS.primary}
      onPress={() => onSelectCategory(id)}
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
