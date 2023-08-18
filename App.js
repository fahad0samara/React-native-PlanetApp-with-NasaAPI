import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 
      'black', justifyContent: 'center', alignItems: 'center'

     }}>
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', marginTop: 32 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 32, textAlign: 'center' }}>
          Let's Get Started!
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
         
        </View>
        <View style={{ marginBottom: 32 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{
              paddingVertical: 12,
              backgroundColor: 'yellow',
              marginHorizontal: 16,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'gray' }}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 16 }}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ fontWeight: 'bold', color: 'yellow' }}> Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
