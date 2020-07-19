import React, { useState, useEffect } from 'react';
import { View, Text, Alert, ScrollView } from 'react-native';
import { colors } from '../../utils';
import { useSelector } from 'react-redux';
import { Input, Button, ActionButton, SecondayButton } from '../../components'
import firestore from '@react-native-firebase/firestore'

const EditDataKk = ({navigation, route}) => {
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
    <ScrollView>
    <View style={{flex: 1, backgroundColor: colors.base, padding: 20}}>
      <View style={{alignItems: "center"}}>
        <Text style={{fontSize: 22, color: colors.default }}>Data Individu</Text>
      </View>
      <Text style={styles.label}>NIK</Text>
      <Input 
        value={biodata.nik}
        placeholder={"NIK"} 
        keyboardType={"number-pad"}
        onChangeText={value => handleForm(value, 'nik')}
        ></Input>
      <View style={styles.space(10)}></View>
      <Text style={styles.label}>Nama Lengkap</Text>
      <Input 
        value={biodata.nama}
        placeholder={"Nama Lengkap"}
        onChangeText={value => handleForm(value, 'nama')}
        ></Input>
      <View style={styles.space(10)}></View>
      <Text style={styles.label}>Jenis Kelamin</Text>
      <Input 
        placeholder={"Jenis Kelamin"}
        value={biodata.jenisKelamin}
        onChangeText={value => handleForm(value, 'jenisKelamin')}
        ></Input>
        <View style={styles.space(10)}></View>
        <Text style={styles.label}>Tanggal Lahir</Text>
        <Input 
          placeholder={"ex: 2020-12-01, Tahun - bulan - tanggal"}
          value={biodata.tanggalLahir}
          maxLength={10}
          keyboardType={"number-pad"}
          onChangeText={value => handleForm(value, 'tanggalLahir')}
          ></Input>
      <View style={styles.space(10)}></View>
      <Text style={styles.label}>Agama</Text>
      <Input 
        placeholder={"Agama"}
        value={biodata.agama}
        onChangeText={value => handleForm(value, 'agama')}>
      </Input>
      <View style={styles.space(10)}></View>
      <Text style={styles.label}>Status Perkawinan</Text>
      <Input 
        placeholder={"Status Perkawinan"}
        value={biodata.status}
        onChangeText={value => handleForm(value, 'status')}>
      </Input>
      <View style={styles.space(30)}></View>
      <Button title={'SIMPAN'} onPress={handleSave}></Button>
      <View style={styles.space(15)}></View>
      <SecondayButton title={'HAPUS DATA'} onPress={handleDelete}></SecondayButton>
    </View>
    </ScrollView>
  ) 
}

export default EditDataKk;

const styles = {
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
  label: {
    fontSize: 14,
    color: colors.default,
    marginHorizontal: 8,
    marginVertical: 5
  },
  input: {
    marginBottom: 10
  },
}