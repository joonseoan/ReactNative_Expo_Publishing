import { useLayoutEffect, useCallback, useContext } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native"
import { StackParmList } from "../App"
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails"; 
import Subtitle from "../components/MealDetail/Subtitle";
import List from '../components/MealDetail/List';
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorite-context";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { addFavorite as _addFavorite, removeFavorite as _removeFavorite } from "../store/redux/favorties";

export type MealDetailNavigationProps = NativeStackScreenProps<StackParmList, 'MealDetail'>

function MealDetailScreen({ route, navigation }: MealDetailNavigationProps) {
  const dispatch = useAppDispatch();
  const favoriteMealsIds = useAppSelector((state) => state.favorites.ids);
  const { ids, removeFavorite, addFavorite } = useContext(FavoritesContext);
  
  const { mealId } = route.params;

  const {
    imageUrl = "",
    title = "",
    duration = 0,
    complexity = "",
    affordability = "",
    ingredients = [],
    steps = [],
  } = MEALS.find(({ id }) => id === mealId) || {};

  const mealIdsFavorite = favoriteMealsIds.includes(mealId);
  
  const headerButtonHandler = () => {
     if (mealIdsFavorite) {
      dispatch(_removeFavorite({ id: mealId }));
     } else {
      dispatch(_addFavorite({ id: mealId }));
     }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonHandler}
            name={mealIdsFavorite ? 'star' : 'star-outline'}
            color="white"
          />
        );
      },
    });
  }, [mealIdsFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <Text style={[styles.title, styles.textStyle]}>{title}</Text>
      <MealDetails
        textStyle={styles.textStyle}
        {...{ duration, complexity, affordability }}
      />
      <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <List data={ingredients} />
        <Subtitle>Steps</Subtitle>
        <List data={steps} />
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  textStyle: {
    color: "white",
  },
  listContainer: {
    width: '90%',
    alignSelf: 'center'
  },
});