import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet,} from 'react-native';
import UserScreen from './screens/UserScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MailScreen from './screens/MailScreen';
import {Ionicons} from "@expo/vector-icons"
import HomeScreen from './screens/HomeScreen';
const TabStack = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1,}}>
      <NavigationContainer>
        <TabStack.Navigator
          screenOptions={{
            tabBarActiveTintColor: "red",
            headerShown: false,
          }}
        >
          <TabStack.Screen
            name="home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <TabStack.Screen
            name="user"
            component={UserScreen}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="person" size={size} color={color} />;
              },
            }}
          />
          <TabStack.Screen
            name="mail"
            component={MailScreen}
            options={{
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="mail" size={size} color={color} />
              ),
            }}
          />
        </TabStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
