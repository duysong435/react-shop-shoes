import React, { Component, useState } from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Login, Home} from '../screens'

const Stack = createNativeStackNavigator();

const App = (props) => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='login'>
            <Stack.Screen name={'Login'} component={Login} />
            <Stack.Screen name={'Home'} component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
} 

export default App;