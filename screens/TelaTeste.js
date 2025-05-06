import { View, Text, StyleSheet, Switch, Image, useColorScheme, useWindowDimensions, Button } from 'react-native';
import react, {useState} from 'react'
import { SafeAreaProvider, SafeAreaView   } from 'react-native-safe-area-context';

import {styles} from '../components/styles';

export default function TelaTeste({navigation}){
    return(
        <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <View style={{flex: 0.8, backgroundColor: '#fff', alignItems: "center"}}>
                <Text style={styles.text}>
                    TelaTeste
                </Text>

                <Button
                    title='Voltar'
                    onPress={()=>{navigation.goBack()}}
                > 
                </Button>   
            </View>
        </SafeAreaView>
        </SafeAreaProvider>
    );
}
