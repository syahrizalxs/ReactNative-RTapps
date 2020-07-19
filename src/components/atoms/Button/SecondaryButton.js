import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler';

const SecondaryButton = ({title, onPress}) => {
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
    borderRadius: 13,
    backgroundColor: colors.base,
    alignItems: "center"
  },
  text: {
    fontSize: 12,
    color: colors.default,
    paddingVertical: 12,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
})

export default SecondaryButton;