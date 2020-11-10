import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Page
import { Splash, Login, Register, Home, DataKk, AddDataKk, EditDataKk, HomeAdmin, DataLansia, 
         DataBalita, ViewDataBalita, EditDataLansia, DataWarga, LaporTamu, LaporSelector, LaporKeluhan, Tentang,
         ListLaporanTamu, ListLaporanKeluhan, DetailTamu, DetailKeluhan } from '../pages'

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="HomeAdmin" component={HomeAdmin} options={{headerShown: false}} />
      <Stack.Screen name="DataKk" component={DataKk} options={{headerShown: false}} />
      <Stack.Screen name="AddDataKk" component={AddDataKk} options={{headerShown: false}} />
      <Stack.Screen name="EditDataKk" component={EditDataKk} options={{headerShown: false}} />
      <Stack.Screen name="DataLansia" component={DataLansia} options={{headerShown: false}} />
      <Stack.Screen name="EditDataLansia" component={EditDataLansia} options={{headerShown: false}} />
      <Stack.Screen name="DataBalita" component={DataBalita} options={{headerShown: false}} />
      <Stack.Screen name="ViewDataBalita" component={ViewDataBalita} options={{headerShown: false}} />
      <Stack.Screen name="DataWarga" component={DataWarga} options={{headerShown: false}} />
      <Stack.Screen name="LaporTamu" component={LaporTamu} options={{headerShown: false}} />
      <Stack.Screen name="LaporSelector" component={LaporSelector} options={{headerShown: false}} />
      <Stack.Screen name="LaporKeluhan" component={LaporKeluhan} options={{headerShown: false}} />
      <Stack.Screen name="ListLaporanTamu" component={ListLaporanTamu} options={{headerShown: false}} />
      <Stack.Screen name="ListLaporanKeluhan" component={ListLaporanKeluhan} options={{headerShown: false}} />
      <Stack.Screen name="DetailTamu" component={DetailTamu} options={{headerShown: false}} />
      <Stack.Screen name="DetailKeluhan" component={DetailKeluhan} options={{headerShown: false}} />
      <Stack.Screen name="Tentang" component={Tentang} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}

export default Router;