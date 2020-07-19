import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../../utils'

const Card = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
  wrapper: {
    width: 150,
    height: 150,
    backgroundColor: colors.default,
    borderRadius: 7,
    shadowRadius: 1,
    marginHorizontal: 10,
    marginVertical:15,
    justifyContent: 'center',
    alignItems: "center",
    padding: 10
  },
  text: {
    color: colors.base,
    fontSize: 22,
    fontWeight: "400",
    alignItems: "center",
    textAlign: "center"
  }
})
