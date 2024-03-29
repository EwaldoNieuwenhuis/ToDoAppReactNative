import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoView from './screens/ToDoView.js'; // Import your HomeScreen component
import OtherView from './screens/OtherView.js'; // Import the screen you want to navigate to

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ToDoView">
        <Stack.Screen name="ToDoView" component={ToDoView} />
        <Stack.Screen name="OtherView" component={OtherView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;