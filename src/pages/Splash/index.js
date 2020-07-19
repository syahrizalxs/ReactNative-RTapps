import React, { Component, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../../utils';

const Splash = ({navigation}) => {
  // useEffect (() => {
  //   setTimeout (() =>{
  //     navigation.replace('Login')
  //   }, 2000)
  // })
  return (
    <View style={style.wrapper}>
      <Text> Splash</Text>
    </View>
  );
};

export default Splash;

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.default,
    flex: 1
  }
})