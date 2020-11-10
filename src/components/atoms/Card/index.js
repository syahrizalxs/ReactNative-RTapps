import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../../utils'
import LogoPenduduk from '../../../styles/logopenduduk.svg'
import { color } from 'react-native-reanimated'

const Card = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      {/* {}<LogoPenduduk width={70} height={70} /> */}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({
  wrapper: {
    width: 130,
    height: 130,
    backgroundColor: colors.default,
    borderRadius: 70,
    shadowRadius: 1,
    marginHorizontal: 10,
    marginVertical:15,
    justifyContent: 'center',
    alignItems: "center",
    padding: 10
  },
  text: {
    color: colors.base,
    fontSize: 19,
    fontWeight: "400",
    alignItems: "center",
    textAlign: "center"
  }
})
