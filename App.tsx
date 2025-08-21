import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home/Home';
import { Form } from './src/screens/Form/Form';
import { useState } from 'react';

export default function App() {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleToggleScreen = () => {
    setFormVisible(!isFormVisible)
  }
  return (
    isFormVisible? <Form handleBackButton={handleToggleScreen} /> : <Home handleSOSButton={handleToggleScreen}/>
  );
}