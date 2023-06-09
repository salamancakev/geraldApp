import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/RootStackParam';
import {Text} from 'react-native';

const Cart = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Almost there...</Text>
      <Text style={{color: 'blue'}} onPress={() => navigate('Orders')}>
        Tap here to reach the final page
      </Text>
    </SafeAreaView>
  );
};

export default Cart;
