import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Stack = createNativeStackNavigator();
const DrawerStack = createDrawerNavigator();
// function DrawerStack() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen 
//         name="category" 
//         component={CategoryScreen} 
//         options={{
//           title:"Category"
//         }} 
//       />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="drawer"
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTitleStyle: { color: "white" },
          contentStyle: { backgroundColor: "#3f2f25" },
        }}
      >
        <Stack.Screen
          name="drawer"
          component={CategoryScreen}
          options={{
            title: "Main Category",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="mealDetail"
          component={MealDetailScreen}
          options={{
            headerRight: () => <Text>In the header</Text>,
          }}
        />
        <Stack.Screen name="mealsOverview" component={MealsOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
