import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type Props = {
  item: {
    title: string;
    color: string;
    id:string
  };
};
type RootParams = {
  mealsOverview: {
    color: string;
    id: string;
    title: string;
  };
};
const CategoryGridTitle = ({ item, }:Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootParams>>();
  const Navigate = (title:string,color:string,id:string)=> navigation.navigate('mealsOverview',{
    title,
    color,
    id,
  })
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.pressableBtn,
          pressed ? styles.btnOpacity : null,
          {
            backgroundColor: item.color,
          },
        ]}
        onPress={() => Navigate(item.title,item.color,item.id)}
      >
        <View>
          <Text>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnOpacity: {
    opacity: 0.5,
  },
  pressableBtn: {
    width: 150,
    height: 150,
    margin: 10,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
    shadowColor: "black",
    borderRadius: 7,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
