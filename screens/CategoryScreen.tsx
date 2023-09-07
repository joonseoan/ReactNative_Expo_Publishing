import { FlatList, ListRenderItemInfo } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import { useCallback } from 'react';

import { DrawerScreenProps } from '@react-navigation/drawer'; // ---> (X)

import {
  NativeStackScreenProps,  
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { RouteProp } from '@react-navigation/native';

import { StackParmList } from '../App';
import { DrawerParmList } from '../App'

export type NavigationProps = NativeStackNavigationProp<StackParmList, 'NestedDrawNav'>;

export interface CategoryScreenProps {
  navigation: NavigationProps;
  id?: string;
}

export type Category = {
  id: string;
  title: string;
  color: string;
};

function CategoryScreen({ navigation }: CategoryScreenProps) {
  function renderCategoryItem(itemData: ListRenderItemInfo<Category>) {
    function handleOnPress() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={handleOnPress}
      />
    );
  }

  const keyExtractor = useCallback(({ id }: Category) => id, []);

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={keyExtractor}
      numColumns={2}
    />
  );
}

export default CategoryScreen