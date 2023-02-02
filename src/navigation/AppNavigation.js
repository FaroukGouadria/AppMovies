import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import MovieDetail from "../screens/moviedetail/MovieDetail";


const Stack = createStackNavigator();

const AppNavigation = () => {
    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{
                title: 'Home'
            }}/>
            <Stack.Screen name="MovieDetail" component={MovieDetail} options={{
                title: 'Movie detail'
            }}/>
        </Stack.Navigator>
    </NavigationContainer>);
}

export default AppNavigation;