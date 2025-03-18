import React from 'react'
import {Ionicons} from "@expo/vector-icons"
import { Pressable, StyleSheet, Text, View } from 'react-native'

type Props = {
  icon:
    | "search"
    | "repeat"
    | "link"
    | "at"
    | "body"
    | "code"
    | "map"
    | "menu"
    | "time"
    | "ellipse"
    | "filter"
    | "image"
    | "stop"
    | "text"
    | "alert"
    | "checkbox"
    | "radio"
    | "timer"
    | "close"
    | "star";
  size: number;
  color: string;
  handlePress: () => void;
};

const IconButton = ({icon,size,color,handlePress}:Props) => {
  return (
    <Pressable onPress={handlePress} style={({pressed})=>pressed && styles.pressed}>
      <Ionicons name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton

const styles = StyleSheet.create({
    pressed:{
        opacity:0.6,
    }
})