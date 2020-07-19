import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../../utils'

var width = Dimensions.get('window').width;


const ListCard = ({data, ...rest}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>NIK: {data.nik}</Text>
      <Text style={styles.text}>{data.nama}</Text>
      <Text style={styles.text}>{data.jenisKelamin}</Text>
    </View>
  )
}

export default ListCard

const styles = StyleSheet.create({
  wrapper: {
    width: width - 20,
    height: 90,
    backgroundColor: colors.base,
    borderRadius: 7,
    shadowRadius: 2,
    marginHorizontal: 10,
    marginVertical: 8,
    padding: 10,
    shadowColor: colors.default,
    elevation: 2
  },
  text: {
    color: colors.default,
    fontSize: 17,
    fontWeight: "400",
  }
})
