import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { colors } from '../../utils';
import { useSelector } from 'react-redux';
import { ActionButton } from '../../components'
import ListCardTamu from '../../components/atoms/ListCardTamu';
import firestore from '@react-native-firebase/firestore';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NoData = () => {
  return (
    <Text>Tidak Ada Data!</Text>
  )
}

const ListLaporanKeluhan = ({navigation}) => {
  const [data, setData] = useState([])
  
  useEffect(()=> {
    get()
  })
  const get = async () => {
    let users = []
    await firestore()
    .collection('keluhan')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        users.push(documentSnapshot.data());
      });
    })
    users.forEach(item => item.tanggalBertamu = item.tanggalBertamu.toDate())
    setData(users)
    console.log({tamu: data})
  };

  const [isEmpty, setEmpty] = useState(false)
  const dataReducer = useSelector(state => state.LoginReducer)
  return (
    <View style={{flex: 1, backgroundColor: colors.base, padding: 20}}>
      <View style={{alignItems: "center"}}>
        <Text style={{fontSize: 22, color: colors.default }}>List Keluhan di  RT.05</Text>
      </View>
      <View style={style.space(20)}></View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={{alignItems: "center"}}>
        {isEmpty ? <NoData /> : data.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('EditDataKk', {
              id: item.foto
            })}>
              <ListCardTamu data={item} key={item.foto} />
            </TouchableOpacity>
          )
          })
        }
      </View>
      </ScrollView>
    </View>
  ) 
}

export default ListLaporanKeluhan;

const style = {
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
  }
}