import React from 'react';
import {Button} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Tela3 from '../screens/Tela3';
import TelaTeste from '../screens/TelaTeste';


export default function Drawer_Tela3({ navigation }) {
    
    const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator        
    initialRouteName='Tela3'
    >
      <Drawer.Screen
        name="Tela3"
        component={Tela3}
        options={{title:"Sobre"}}
      />
      <Drawer.Screen
        name='TelaTeste'
        component={TelaTeste}
        options={{title:"Teste"}}
      />     
    </Drawer.Navigator>
  );
}