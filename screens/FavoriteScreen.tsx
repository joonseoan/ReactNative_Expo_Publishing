import { Text, View, StyleSheet } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { useAppSelector } from "../hooks/useRedux";

function FavoriteScreen() {
  const favoriteMealsIds = useAppSelector((state) => state.favorites.ids);

  const favoritesItems = MEALS.filter(({ id }) =>
    favoriteMealsIds.includes(id)
  );

  if (!favoritesItems.length) {
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
    </View>
  }
  
  return (
    <MealsList items={favoritesItems}/>
  )
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  }
});