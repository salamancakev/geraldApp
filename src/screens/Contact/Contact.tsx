import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {Text, View} from 'react-native';

const Contact = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>Contact Us!</Text>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Text>Send us an email to </Text>
        <Text style={{fontWeight: 'bold'}}>gerald@email.com </Text>
      </View>
    </SafeAreaView>
  );
};

export default Contact;
