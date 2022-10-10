import React, { Component, useState } from 'react'


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Login, Home, Register} from '../screens'
import TabUI from './TabUI'

const Stack = createNativeStackNavigator();

const App = (props) => {
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='login'
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name={'Login'} component={Login} />
            {/* <Stack.Screen name={'Home'} component={Home} /> */}
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='TabUI' component={TabUI} />
        </Stack.Navigator>
    </NavigationContainer>
} 

export default App;