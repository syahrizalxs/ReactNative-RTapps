import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../../utils'

var width = Dimensions.get('window').width;


const ListCardKeluhan = ({data, ...rest}) => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Nama Pelapor: <Text style={styles.textInside}>{data.pelapor}</Text></Text>
      <Text style={styles.text}>Judul Keluhan: <Text style={styles.textInside}>{data.judulKeluhan}</Text></Text>
      <Text style={styles.text}>Lokasi Kejadian: <Text style={styles.textInside}>{data.lokasiKejadian}</Text></Text>
      <Text style={styles.text}>Tanggal: <Text style={styles.textInside}>{new Date(data.tanggalBertamu).toLocaleDateString("id-ID")}</Text></Text>
    </View>
  )
}

export default ListCardKeluhan

const styles = StyleSheet.create({
  wrapper: {
    width: width - 20,
    height: 120,
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
  },
  textInside: {
    fontWeight: "bold"
  }
})
