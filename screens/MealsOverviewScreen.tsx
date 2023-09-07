import { useCallback, useLayoutEffect } from 'react';
import { View, FlatList, StyleSheet, ListRenderItemInfo } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MEALS, CATEGORIES } from '../data/dummy-data'
import { Meal } from '../models/meal'
import { StackParmList } from '../App';
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';

export type NavigationProps = NativeStackScreenProps<StackParmList, "MealsOverview">;

export type RouteProps = RouteProp<
  StackParmList,
  'MealsOverview'
>;

export interface MealsOverviewProps extends NavigationProps {
  id?: string;
}

const MealsOverviewScreen = ({ route, navigation }: MealsOverviewProps) => {
  const {
    params: { categoryId = "" },
  } = useRoute<RouteProps>();

  useLayoutEffect(
    () => {
      const { title = "" } =
        CATEGORIES.find(({ id }) => id === categoryId) || {};

      navigation.setOptions({ title });

    }, []);

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  return (
    <MealsList items={displayedMeals} />
  );
 
}

export default MealsOverviewScreen;
