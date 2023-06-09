import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/RootStackParam';

const Home = () => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Welcome to my app</Text>
      <Text style={{color: 'blue'}} onPress={() => navigate('Cart')}>
        Tap here to go to the next page
      </Text>
    </SafeAreaView>
  );
};

export default Home;
