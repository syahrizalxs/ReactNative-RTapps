import React, { useState } from 'react';
import { View, Text, Alert, ScrollView, Picker } from 'react-native';
import { colors } from '../../utils';
import { useSelector } from 'react-redux';
import { Input, Button } from '../../components'
import firestore from '@react-native-firebase/firestore'

const AddDataKk = ({navigation}) => {
  const dataReducer = useSelector(state => state.LoginReducer)
  const [biodata, setBiodata] = useState({
    nik: '',
    nama: '',
    jenisKelamin: 'Laki - Laki',
    agama: '',
    status: 'Belum Menikah',
    tanggalLahir: '2020-12-01',
    noKk: dataReducer.dataUser.noKk,
    umur: '',
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
    param.umur = age
    await firestore()
    .collection('dataWarga')
    .add(param)
    .then((res) => {
      Alert.alert('Data Berhasil Ditambahkan!')
      navigation.navigate('DataKk')
    });
}
  
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: colors.base, padding: 20}}>
        <View style={{alignItems: "center"}}>
          <Text style={{fontSize: 22, color: colors.default }}>Tambah Data Keluarga</Text>
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
        {/* <Input 
          placeholder={"Jenis Kelamin"}
          value={biodata.jenisKelamin}
          onChangeText={value => handleForm(value, 'jenisKelamin')}
          ></Input> */}
          <Picker
            selectedValue={biodata.jenisKelamin}
            style={styles.dropdown}
            itemStyle={{backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17}}
            mode={'dialog'}
            onValueChange={(itemValue, itemIndex) => handleForm(itemValue, 'jenisKelamin')}
          >
            <Picker.Item label="Laki - Laki" value="Laki - Laki" />
            <Picker.Item label="Perempuan" value="Perempuan" />
          </Picker>
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
        {/* <Input 
          placeholder={"Status Perkawinan"}
          value={biodata.status}
          onChangeText={value => handleForm(value, 'status')}>
        </Input> */}
        <Picker
            selectedValue={biodata.status}
            style={styles.dropdown}
            itemStyle={{backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17}}
            mode={'dialog'}
            onValueChange={(itemValue, itemIndex) => handleForm(itemValue, 'status')}
          >
            <Picker.Item label="Menikah" value="Menikah" />
            <Picker.Item label="Belum Menikah" value="Belum Menikah" />
          </Picker>
        <View style={styles.space(30)}></View>
        <Button title={'SIMPAN'} onPress={handleSave}></Button>
      </View>
    </ScrollView>
  ) 
}

export default AddDataKk;

const styles = {
  wrapper: {
    marginBottom: 12
  },
  space: value => {
    return {
      height: value
    }
  },
  spaceW: value => {
    return {
      width: value
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
    marginVertical: 5,
    fontWeight: "bold"
  },
  input: {
    marginBottom: 10
  },
  dropdown: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.default,
    borderRadius: 13,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: colors.default
  }
}