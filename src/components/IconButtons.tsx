import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface IconProps {
  name: string;
  backgroundColor: string;
  color: string;
  onPress: Function;
}

const IconButton: FC<IconProps> = ({name, backgroundColor, color, onPress}) => (
  <TouchableOpacity
    style={[styles.singleButton, {backgroundColor}]}
    activeOpacity={0.85}>
    <Icon name={name} size={20} color={color} />
  </TouchableOpacity>
);

export default IconButton;

const styles = StyleSheet.create({
  singleButton: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
    padding: 15,
  },
});
