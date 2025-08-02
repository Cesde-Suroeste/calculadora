import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>
      <Calculator />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
