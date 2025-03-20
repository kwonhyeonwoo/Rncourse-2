import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import CategoryScreen from "./screens/CategoryScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import FavoritScreen from "./screens/FavoritScreen";
import { FavoriteProvider } from "./store/context/favorites-context";
import { Provider } from "react-redux";
import store from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerStack() {
  return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTitleStyle: { color: "white" },
          sceneStyle: { backgroundColor: "#351401" },
          drawerContentStyle: { backgroundColor: "#351401" },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#e2b497",
        }}
      >
        <Drawer.Screen
          name="category"
          component={CategoryScreen}
          options={{
            title: "Category",
            drawerIcon: ({ size, color }) => (
              <Ionicons name={"list"} size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="favorit"
          component={FavoritScreen}
          options={{
            title: "Category",
            drawerIcon: ({ size, color }) => (
              <Ionicons name={"star"} size={size} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
  );
}

export default function App() {
  return (
    // <FavoriteProvider>
    <Provider store={store}>
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
            component={DrawerStack}
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
    </Provider>
    // </FavoriteProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
