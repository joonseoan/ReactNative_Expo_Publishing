import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons";


/**
interface Person {
  name: string;
  age: number;
}

// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}

let person = {
  name: "Max",
  age: 27
};

printPersonProperty(person, "name"); // Printing person property name: "Max"
*/

interface IconButtonProps {
  onPress(): void;
  // [IMPORTANT]
  // We can get `interface.property` or  `type.property` type here.
  // `glypMap` is a map that returns type of the `key`
  name: keyof typeof Ionicons.glyphMap;
  color: string;
}

function IconButton({ onPress, color, name }: IconButtonProps) {
  return <Pressable onPress={onPress} style={({ pressed}) => pressed && styles.pressed }>
    <Ionicons name={name} size={24} color={color} />
  </Pressable>
  
}

export default IconButton

const styles = StyleSheet.create({
  pressed: {
    opacity: .7,
  }
})