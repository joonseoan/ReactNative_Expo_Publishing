import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import CategoryScreen from "./screens/CategoryScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

// Compare
import { Provider } from "react-redux";
import store from "./store/redux/store";
import FavoritesContextProvider from "./store/context/favorite-context";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

export type StackParmList = {
  NestedDrawNav: undefined;
  // The destination screen needs to have params in this case.
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

export type DrawerParmList = {
  Categories: undefined;
  Favorites: undefined;
};

const RootStack = createNativeStackNavigator<StackParmList>();
const DrawerStack = createDrawerNavigator<DrawerParmList>();

function DrawerNavigator() {
  return (
    <DrawerStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#efd9cd",
      }}>
      <DrawerStack.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <DrawerStack.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </DrawerStack.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* Just for Comparison ^^ */}
      <Provider store={store}>
        <FavoritesContextProvider>
          <NavigationContainer>
            <RootStack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#351401",
                },
                headerTintColor: "white",
                contentStyle: {
                  backgroundColor: "#3f2f25",
                },
              }}>
              <RootStack.Screen
                name="NestedDrawNav"
                component={DrawerNavigator}
                options={{
                  headerShown: false,
                }}
              />
              <RootStack.Screen
                name="MealsOverview"
                component={MealsOverviewScreen}
              />
              <RootStack.Screen
                name="MealDetail"
                component={MealDetailScreen}
              />
            </RootStack.Navigator>
          </NavigationContainer>
        </FavoritesContextProvider>
      </Provider>
    </>
  );
}
