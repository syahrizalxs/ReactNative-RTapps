import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { colors } from '../../utils';
import { Input, Button } from '../../components';
import SecondaryButton from '../../components/atoms/Button/SecondaryButton';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({navigation}) => {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  })
  useEffect(() =>{
    checkLogin()
  },[])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.LoginReducer)
  
  const checkLogin = async () => {
    console.log(userInfo)
    if (userInfo.dataUser.username) {
      if (userInfo.dataUser.role === 'admin') {
        navigation.replace('HomeAdmin')
      } else {
        navigation.replace('Home')
      }
    }
  }

  const onPressLogin = async () => {
    if (login.username === '' || login.password === '') return Alert.alert('Field harus di isi!')
    setLoading(true)
    let isExistUser = []
    
    await firestore()
      .collection('users')
      // Filter results
      .where('username', '==', login.username).where('password', '==', login.password)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          isExistUser.push(doc.data()) 
        })
      });
    if(isExistUser.length > 0) {
      if (isExistUser[0].role === 'user') {
        dispatch({type: 'SET_USER_DATA', data: isExistUser[0]})
        Alert.alert("Berhasil Login")
        navigation.replace('Home')
      }
      else {
        dispatch({type: 'SET_USER_DATA', data: isExistUser[0]})
        Alert.alert("Berhasil Login Sebagai Admin!")
        navigation.replace('HomeAdmin')
      }
    } else {
      Alert.alert("Username / Password salah")
    }
    setLoading(false)
  }

  const handleForm = (value, type) => {
    setLogin({
      ...login,
      [type]: value
    })
  }
  return (
    <View style={{flex: 1, backgroundColor: colors.base, justifyContent: "center", padding: 20}}>
      <ActivityIndicator color="#0000ff" size="large" style={style.loading} animating={loading}/>
      <Text style={{color: colors.default, fontSize: 19, fontWeight: 'bold'}}> Sistem Informasi Kependudukan RT.05/05</Text>
      <View style={style.space(25)}/>
      <Input 
        placeholder="Username"
        value={login.username}
        onChangeText={value => handleForm(value, 'username')}
      />
      <View style={style.space(15)} />
      <Input
        placeholder="Password" 
        secureTextEntry={true} 
        onChangeText={value => handleForm(value, 'password')}
        value={login.password}
      />
      <View style={style.space(15)}/>
      <Button title="Sign In" onPress={onPressLogin}/>
      <View style={style.space(12)} />
      <Text style={{alignSelf: "center" , color: '#ccc'}}>atau</Text>
      <View style={style.space(12)} />
      <SecondaryButton title="Daftar" onPress={() => navigation.navigate('Register') } />
    </View>
  ) 
}

export default Login;

const style = StyleSheet.create({
  wrapper: {
    marginBottom: 12
  },
  space: value => {
    return {
      height: value
    }
  },
  registasi: {
    fontSize: 12,
    alignContent: "center"
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
})