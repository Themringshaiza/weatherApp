// // import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/screen/Home';
import WeatherScreen from './components/screen/Weather';
import WeatherReportScreen from './components/screen/WeatherReport'
import { Provider } from 'react-redux';
// import  store  from './Redux/Store'
import { store, persistor } from './Redux/Store';
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Dashboard">
          <Stack.Screen name="Dashboard" component={HomeScreen}
           options={{ title: 'Weather APP', headerStyle: {
            backgroundColor: '#0ebbf0'
         } }} 
           />
          <Stack.Screen name="Weather Forecast" component={WeatherScreen}
          options={{ headerStyle: {
            backgroundColor: '#0ebbf0'
         } }}
          />
           <Stack.Screen name="Weather report" component={WeatherReportScreen}
           options={{ headerStyle: {
            backgroundColor: '#0ebbf0'
         } }} 
           />
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;