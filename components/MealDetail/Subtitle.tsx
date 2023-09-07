import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }: { children: string }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={[styles.subtitle]}>{children}</Text>
    </View>
  );
}

export default Subtitle

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#e2b497",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 6,
    padding: 4,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#e2b497",
  },
});