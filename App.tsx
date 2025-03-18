import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createDrawerNavigator} from "@react-navigation/drawer";
import { StyleSheet, Text, View } from 'react-native';
import UserScreen from './screens/UserScreen';

const Draw = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Draw.Navigator>
        <Draw.Screen name='user' options={{
          drawerLabel:"회원유저",
          drawerActiveBackgroundColor:"orange",
        }} component={UserScreen}/>
      </Draw.Navigator>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
