import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {Text} from 'react-native';

const Orders = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Congratulations!</Text>
      <Text>You've reached the end of the stack</Text>
    </SafeAreaView>
  );
};

export default Orders;
