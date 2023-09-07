import { useCallback } from "react";
import { ListRenderItemInfo, View, FlatList, StyleSheet } from "react-native";
import { Meal } from "../../models/meal";
import MealItem from "./MealItem"; 

function MealsList({ items }: { items: Meal[] }) {
   const keyExtractor = useCallback((itemData: Meal) => {
     return itemData.id;
   }, []);

   const renderMealItem = useCallback(({ item }: ListRenderItemInfo<Meal>) => {
     return (
       <MealItem
         id={item.id}
         title={item.title}
         imageUrl={item.imageUrl}
         duration={item.duration}
         complexity={item.complexity}
         affordability={item.affordability}
       />
     );
   }, []);

   return (
     <View style={styles.container}>
       <FlatList
         data={items}
         renderItem={renderMealItem}
         keyExtractor={keyExtractor}
       />
     </View>
   );
}

export default MealsList;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});