import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ActionButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  wrapper: {
    borderColor: colors.default,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: colors.default,
    padding: 10,
    // width: 70
  },
  text: {
    fontSize: 12,
    color: colors.base,
    fontWeight: "400",
    textAlign: "center"
  }
})

export default ActionButton;