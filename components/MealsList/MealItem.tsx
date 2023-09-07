import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
  PressableStateCallbackType,
} from "react-native";
import { useCallback } from 'react';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { StackParmList } from "../../App";
import MealDetails from "../MealDetails";

export type NavigationProp = NativeStackNavigationProp<
  StackParmList,
  "MealDetail"
>;

export type MealItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  affordability: string;
  duration: number;
  complexity: string;
}

function MealItem ({ id, title, imageUrl, complexity, duration, affordability  }: MealItemProps) {
  const navigation = useNavigation<NavigationProp>();
  
  const style = useCallback(({ pressed }: PressableStateCallbackType) => {
    return pressed ? styles.buttonPressed: null;
  }, []);

  function handleRoute() {
    navigation.navigate('MealDetail', { mealId: id })
  }
  
  return (
    <View style={styles.mealItem}>
      <Pressable 
        onPress={handleRoute}
        android_ripple={{ color: '#ccc' }}
        style={style}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    // [IMPORTANT]
    // For iOS, because overflow: visible for the shadow right above,
    // border radius should be managed by the child view!!
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

  buttonPressed: {
    opacity: 0.5,
  },
});
