import React from 'react'
import { StyleSheet, Text, View, BackHandler } from 'react-native'
import { Card, Button } from '../../components'
import { colors } from '../../utils'
import { useSelector } from 'react-redux'

const LaporSelector = ({navigation}) => {
  const userReducer = useSelector(state => state.LoginReducer)
  const onPressCard = (screen) => {
    navigation.navigate(screen)
  }
  
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>Pilih Jenis Lapor</Text>
      </View>
      <View style={styles.wrapperMenu}>
        <Button style={styles.button} title="Lapor Tamu" onPress={() => onPressCard('LaporTamu')}></Button>
        <View style={styles.space(20)}></View>
        <Button style={styles.button} title="Lapor Keluhan" onPress={() => onPressCard('LaporKeluhan')}></Button>
      </View>
    </View>
  )
}

export default LaporSelector

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  title: {
    fontSize: 40,
    color: colors.default,
    fontWeight: "bold",
    paddingTop: 20,
    justifyContent: "center",
    textAlign: "center"
  },
  space: (value) => {
    return {height: value}
  },
  button: {
  },
  wrapperMenu: {
    padding: 20,
    // flex: 1,
    // flexDirection: "row",
    // flexWrap: "wrap",
    // justifyContent: "center",
    // alignItems: "center"
  }
})
