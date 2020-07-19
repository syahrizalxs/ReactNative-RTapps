import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
import { colors } from '../../utils';
import { useSelector } from 'react-redux';
import { Input, Button, ActionButton, SecondayButton } from '../../components'
import firestore from '@react-native-firebase/firestore'

const ViewDataBalita = ({navigation, route}) => {
  const { id } = route.params;
  const dataReducer = useSelector(state => state.LoginReducer)

  useEffect(() =>{
    getDetail();
    return () => { getDetail() }
  }, [])
  
  const [docId, setDocId] = useState('')
  const [biodata, setBiodata] = useState({
    nik: '',
    nama: '',
    jenisKelamin: '',
    agama: '',
    status: '',
    tanggalLahir: '',
    umur: '',
    noKk: dataReducer.dataUser.noKk
  })
  const handleForm = (value, type) => {
    setBiodata({
      ...biodata,
      [type]: value
    })
  }
  const handleSave = async () => {
    let age = new Date().getFullYear() - new Date(biodata.tanggalLahir).getFullYear()
    let param = biodata
    biodata.umur = age
    await firestore()
    .collection('dataWarga')
    .doc(docId)
    .update(biodata)
    .then((res) => {
      Alert.alert('Data Berhasil Diubah!')
      navigation.navigate('DataKk')
    });
  }
  const handleDelete = async () => {
    await firestore()
    .collection('dataWarga')
    .doc(docId)
    .delete()
    .then((res) => {
      Alert.alert('Data Berhasil Dihapus!')
      navigation.navigate('DataKk')
    });
  }
  const getDetail = async () => {
    let users = []
    let docId = ''
    await firestore()
    .collection('dataWarga')
    .where('nik', '==', id)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        docId = documentSnapshot.id
        users.push(documentSnapshot.data());
      });
    })

    console.log('detail')
    setBiodata(users[0])
    setDocId(docId)
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
    <View style={{flex: 1, backgroundColor: colors.base, padding: 20}}>
      <View style={{alignItems: "center"}}>
        <Text style={{fontSize: 22, color: colors.default }}>Data Individu</Text>
      </View>
      <Text style={styles.label}>NIK</Text>
      <Text style={styles.value}>{biodata.nik}</Text>
      <View style={styles.space(30)}></View>
      <Text style={styles.label}>Nama</Text>
      <Text style={styles.value}>{biodata.nama}</Text>
      <View style={styles.space(30)}></View>
      <Text style={styles.label}>Jenis Kelamin</Text>
      <Text style={styles.value}>{biodata.jenisKelamin}</Text>
      <View style={styles.space(30)}></View>
      <Text style={styles.label}>Tanggal Lahir</Text>
      <Text style={styles.value}>{biodata.tanggalLahir}</Text>
      <View style={styles.space(30)}></View>
      <Text style={styles.label}>Umur</Text>
      <Text style={styles.value}>{biodata.umur} Tahun</Text>
      <View style={styles.space(30)}></View>
      <Text style={styles.label}>Agama</Text>
      <Text style={styles.value}>{biodata.agama}</Text>
      <View style={styles.space(30)}></View>
    </View>
    </ScrollView>
  ) 
}

export default ViewDataBalita;

const styles = {
  wrapper: {
    marginBottom: 12,
    flex: 1
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
  label: {
    fontSize: 14,
    color: colors.default,
    marginHorizontal: 8,
    marginVertical: 5
  },
  value: {
    fontSize: 15,
    color: colors.default,
    marginHorizontal: 8,
    marginVertical: 5,
    fontWeight: 'bold'
  },
  input: {
    marginBottom: 10
  },
}