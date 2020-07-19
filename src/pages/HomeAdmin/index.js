import React from 'react'
import { StyleSheet, Text, View, BackHandler } from 'react-native'
import { Card } from '../../components'
import { colors } from '../../utils'
import { useSelector } from 'react-redux'

const HomeAdmin = ({navigation}) => {
  const userReducer = useSelector(state => state.LoginReducer)
  const onPressCard = (screen) => {
    navigation.navigate(screen)
  }
  
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>Menu Admin</Text>
      </View>
      <View style={styles.wrapperMenu}>
        <Card title="Data Warga" onPress={() => onPressCard('DataWarga')}></Card>
        <Card title="Data Lansia" onPress={() => onPressCard('DataLansia')}></Card>
        <Card title="Data Balita" onPress={() => onPressCard('DataBalita')}></Card>
        <Card title="Laporan Warga" onPress={() => onPressCard('LaporanWarga')}></Card>
      </View>
    </View>
  )
}

export default HomeAdmin

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
  wrapperMenu: {
    padding: 20,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }
})
