import React, { useState } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { colors } from '../../utils'
import { Input, Button } from '../../components'
import firestore from '@react-native-firebase/firestore'

const Register = ({navigation}) => {
  const [register, setRegister] = useState({
    noKk: '',
    namaKk: '',
    username: '',
    password: '',
    role: 'user'
  })
  const handleForm = (value, type) => {
    setRegister({
      ...register,
      [type]: value
    })
  }

  const handleRegister = async () => {   
      await firestore()
      .collection('users')
      .doc(register.username)
      .get()
      .then(async doc => {
        if (doc.exists) {
          Alert.alert('Username terebut telah digunakan!')
          return
        } else {
          await firestore()
          .collection('users')
          .doc(register.username)
          .set(register)
          .then((res) => {
            console.log(res)
            Alert.alert('Pengguna Berhasil Ditambahkan!')
            navigation.navigate('Login')
          })
          .catch(e => {
            console.log(e)
          })
        }
      })
  }
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Daftar</Text>
      <Text style={styles.label}>No KK</Text>
      <Input 
        value={register.noKk}
        placeholder={"No KK"} 
        keyboardType={"number-pad"}
        onChangeText={value => handleForm(value, 'noKk')}
        ></Input>
      <View style={styles.space(10)}></View>
      <Text style={styles.label}>Nama KK</Text>
      <Input 
        value={register.namaKk}
        placeholder={"Nama KK"}
        onChangeText={value => handleForm(value, 'namaKk')}
        ></Input>
      <View style={styles.space(10)}></View>
      <Text style={styles.label}>Username</Text>
      <Input 
        placeholder={"Username"}
        value={register.username}
        onChangeText={value => handleForm(value, 'username')}
        ></Input>
      <View style={styles.space(10)}></View>
      <Text style={styles.label}>Password</Text>
      <Input 
        placeholder={"Password"}
        value={register.password}
        secureTextEntry={true}
        onChangeText={value => handleForm(value, 'password')}></Input>
      <View style={styles.space(25)}></View>
      <Button title={'Register'} onPress={handleRegister}></Button>
    </View>
  )
}

export default Register;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.base,
    flex: 1,
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.default,
    justifyContent: "center",
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    color: colors.default,
    marginHorizontal: 8,
    marginVertical: 5
  },
  input: {
    marginBottom: 10
  },
  space: (value) => {
    return {
      height: value
    }
  }
})
