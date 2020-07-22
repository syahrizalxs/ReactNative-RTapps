import React from 'react'
import { StyleSheet, Text, View, BackHandler } from 'react-native'
import { Card, SecondayButton } from '../../components'
import { colors } from '../../utils'
import { useSelector, useDispatch } from 'react-redux'

const HomeAdmin = ({navigation}) => {
  const userReducer = useSelector(state => state.LoginReducer)
  const dispatch = useDispatch()
  const onPressCard = (screen) => {
    navigation.navigate(screen)
  }

  const onLogout = () => {
    dispatch({ type: 'DESTROY_USER' })
    navigation.replace('Login')
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
        <Card title="Laporan Warga" onPress={() => onPressCard('LaporSelector')}></Card>
        <View style={{width: 200, marginTop: 20}}>
          <SecondayButton title="Keluar" onPress={() => onLogout()}></SecondayButton>
        </View>
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
