import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
import {faHeart as solidHeart} from '@fortawesome/free-solid-svg-icons/faHeart';
import PropTypes from 'prop-types';

export default function Character({
  information,
  navigation,
  setFavourites,
  resetLikes,
}) {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(false);
  }, [resetLikes]);

  favouriteCharacter = () => {
    setLiked(!liked);
    setFavourites(!liked, information.gender);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={favouriteCharacter}>
        <FontAwesomeIcon icon={liked ? solidHeart : faHeart} color={'orange'} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CharacterScreen', {
            name: information.name,
          })
        }
        style={styles.character}>
        <View style={styles.features}>
          <Text style={styles.name}>{information.name}</Text>
          <Text style={styles.name}>{information.gender}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: '#FFD580',
    flexDirection: 'row',
    alignItems: 'center',
  },
  character: {
    flex: 1,
    paddingHorizontal: 10,
  },
  features: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    paddingVertical: 30,
    fontSize: 16,
    color: '#2F4F4F',
    fontWeight: '500',
  },
});

Character.propTypes = {
  information: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  setFavourites: PropTypes.func.isRequired,
  resetLikes: PropTypes.bool.isRequired,
};
