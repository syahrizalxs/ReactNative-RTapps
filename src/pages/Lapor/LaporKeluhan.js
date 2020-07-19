import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, Alert, ActivityIndicator } from 'react-native';
import { colors } from '../../utils';
import { Input, Button, ActionButton } from '../../components';
import SecondaryButton from '../../components/atoms/Button/SecondaryButton';
import ImagePicker , { openCamera } from 'react-native-image-crop-picker'
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app'
import storage from '@react-native-firebase/storage';
import { useSelector } from 'react-redux';


let dimension = Dimensions.get('screen')
const LaporKeluhan = ({navigation}) => {
  const userInfo = useSelector(state => state.LoginReducer)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    judulKeluhan: '',
    lokasiKejadian: '',
    deskripsiKeluhan: '',
    foto: '',
    createdBy: ''
  })

  takeCamera = function () {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setForm({
        ...form,
        foto: image.path
      })
    });
  }

  const handleForm = (value, type) => {
    setForm({
      ...form,
      [type]: value
    })
  }
  
  const handleOk = async () => {
    setLoading(true);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const TODAY = new Date()
    const ref = `keluhan/${form.judulKeluhan}.jpg`
    const reference = firebase.storage().ref(ref);
    const pathToFile = form.foto
    // uploads file
    let param = form
    const response = await reference.putFile(pathToFile)
    if (response.state === 'success') {
      const resUrl = await firebase.storage().ref(ref).getDownloadURL()
      if (!resUrl) return Alert.alert('Terjadi Kesalahan!')
      param.foto = resUrl
      param.tujuan = userInfo.dataUser.namaKk
      param.createdBy = userInfo.dataUser.username
      param.tanggalBertamu = TODAY
      console.log(TODAY.toLocaleDateString("id-ID", options))
    if (form.judulKeluhan === '') {
      Alert.alert('judul Keluhan Wajib Di isi!')
      setLoading(false)
      return
    }
      await firestore()
      .collection('keluhan')
      .add(form)
      .then((res) => {
        setLoading(false)
        Alert.alert('Berhasil Lapor!')
        navigation.navigate('Home')
      });
    } else {
      return Alert.alert('Terjadi Kesalahan')
    }
  }
  return (
    <ScrollView>
      <View style={style.wrapper}>
      <ActivityIndicator color={colors.default} style={style.loading} size="large" animating={loading} />
        <Text style={style.title}>Lapor Keluhan</Text>
        <View style={style.space(10)}></View>
        <Text style={style.label}>Unggah foto pendukung / bukti</Text>
        <Image
          style={style.image}
          source={{
            uri: form.foto || "https://lh3.googleusercontent.com/proxy/YQEQcmvrpov6Vc4F7M5NEXMJudbJ7lSR9dYqI53BnZCahGqwpSRlef8UcB3OAVYCau2irJDdG_gMQt2l5tDreZ59WejatSmZS3gCzMmIgou3IsBi_-UnpZJGDH7oL_gSYaOOJmGu5_o"
          }}
        />
        <View style={style.space(10)}></View>
        <SecondaryButton title={"Ambil Gambar"} onPress={() => takeCamera()}></SecondaryButton>
        <View style={style.space(20)}></View>
        <Text style={style.label}>Judul Keluhan</Text>
        <Input 
          placeholder="Judul Keluhan"
          value={form.judulKeluhan}
          onChangeText={value => handleForm(value, 'judulKeluhan')}
        ></Input>
        <Text style={style.label}>Lokasi Kejadian</Text>
        <Input 
          placeholder="Lokasi Kejadian"
          value={form.lokasiKejadian}
          onChangeText={value => handleForm(value, 'lokasiKejadian')}
        ></Input>
        {/* <Text style={{color: '#000', opacity: 0.5}}>* Isi domisili tamu jika tamu lebih dari 1 x 24 Jam / Kost</Text> */}
        <Text style={style.label}>Deskripsi Keluhan</Text>
        <Input 
          placeholder="Deskripsi Keluhan"
          value={form.deskripsiKeluhan}
          multiline={true}
          numberOfLines={4}
          onChangeText={value => handleForm(value, 'deskripsiKeluhan')}
        ></Input>
        <View style={style.space(20)}></View>
        <Button title={'Lapor'} onPress={handleOk} ></Button>
      </View>
    </ScrollView>
  ) 
}

export default LaporKeluhan;

const style = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  space: value => {
    return {
      height: value
    }
  },
  title: {
    fontSize: 29,
    top: 0,
    fontWeight: "bold",
    color: colors.default,
    alignSelf: "center",
    padding: 20,
  },
  label: {
    fontSize: 14,
    color: colors.default,
    marginHorizontal: 8,
    marginVertical: 5
  },
  image: {
    padding: 20,
    borderColor: colors.default,
    height: 200,
    borderWidth: 1,
    borderRadius: 3
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 30,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    // zIndex: 1,
  }
})