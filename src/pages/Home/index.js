import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Card } from '../../components'
import { colors } from '../../utils'
import { useSelector, useDispatch } from 'react-redux'
import ImagePicker, { openCamera } from 'react-native-image-crop-picker'

import LogoPenduduk from '../../styles/logopenduduk.svg'

const Home = ({navigation}) => {
  const userReducer = useSelector(state => state.LoginReducer)
  const dispacth = useDispatch()
  const onPressCard = (screen) => {
    navigation.navigate(screen)
  }
  
  const onLogout = () => {
    dispacth({type: 'DESTROY_USER'})
    navigation.replace('Login')
  }
  
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>Menu Utama</Text>
      </View>
      <View style={styles.wrapperMenu}>
        {/* <TouchableOpacity>
          <LogoPenduduk width={30} height={30}/>
          <Text>Data KK</Text>
        </TouchableOpacity> */}

        <Card title="Data KK" onPress={()  => onPressCard('DataKk')}>
        </Card>
        <Card title="Lapor" onPress={() => onPressCard('LaporSelector')} ></Card>
        <Card title="Tentang" onPress={() => onPressCard('Tentang')}></Card>
        <Card title="Keluar" onPress={onLogout}></Card>
      </View>
    </View>
  )
}

export default Home

openGallery = async function (camera) {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log(image);
  });  
};

takeCamera = async function () {
  ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
  });
}

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
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
})
