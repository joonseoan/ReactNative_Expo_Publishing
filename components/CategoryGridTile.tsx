import { Pressable, View, Text, StyleSheet, Platform, PressableStateCallbackType } from "react-native"
import { FC, useCallback } from "react"

export interface CategoryGridTileProps {
  title: string;
  color?: string;
  onPress(): void
}

const CategoryGridTile: FC<CategoryGridTileProps> = ({ title, color, onPress }) => {

  const style = useCallback(({ pressed }: PressableStateCallbackType) => {
    return [
      styles.button,
      // null is an no style.
      pressed ? styles.buttonPressed : null,
    ]
  }, []);

  return (
    <View style={styles.gridItem}>
      <Pressable 
        android_ripple={{ color: '#ccc' }}
        style={style}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  // each cell
  gridItem: {
    // A FlatList item can be set as `flex: 1`
    // when *** nunColums**** prop is available in FlatList.
    // --> each item can cover the same size space in horizontally.
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    // For android
    elevation: 4,
    // For iOS
    // [IMPORTANT]
    // Must have the background color for iOS
    // to show shadow below
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    // button must have flex 1
    // because it is between <View />
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    // covers 100%
    flex: 1,
    // Only for iOS. It prevents the bgcolor (props) overflows in the innerContainer.
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});