import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mainscreen from './View/Mainscreen';
import IntroScreen from './View/IntroScreen';
export default function App() {

  const [isloaded, SetIsloaded]= useState(false)

  setTimeout(() => {
    SetIsloaded(true);
  }, 2000);

  return (
    <View style={styles.container}>
    {isloaded ? <Mainscreen/> : <IntroScreen/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
