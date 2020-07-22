import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { colors } from '../../utils';

const Tentang = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.base, justifyContent: "center", padding: 20}}>
      <Text>Aplikasi ini dibuat untuk memenuhi syarat kelulusan Skripsi.</Text>
    </View>
  ) 
}

export default Tentang;

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