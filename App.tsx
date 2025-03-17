import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="category">
        <Stack.Screen name="category" component={CategoryScreen} options={{
          title:"All Category",
          headerStyle:{backgroundColor:"#351401"},
          headerTitleStyle:{color:"white"},
          contentStyle:{backgroundColor:"#3f2f25"}
        }}/>
        <Stack.Screen name="mealsOverview" component={MealsOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
