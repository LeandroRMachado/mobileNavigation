import React from 'react';
import { 
  Button, 
  Text, 
  View 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation();

  
  function openScreen() {
    navigation.navigate('Backdoor')
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#83C9F4',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Button
        title="Ir para a screen de Backdoor"
        onPress={openScreen}
        color='#a33e30'
      />

    </View>
  );
}