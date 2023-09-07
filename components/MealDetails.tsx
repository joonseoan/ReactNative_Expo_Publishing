import { View, StyleSheet, Text } from "react-native";

export interface MealDetailsProps {
 duration: number;
 complexity: string;
 affordability: string;
 style?: object;
 textStyle?: object;
}

function MealDetails({
  duration,
  complexity,
  affordability,
  style = undefined,
  textStyle = undefined
}: MealDetailsProps) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toLowerCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toLowerCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});