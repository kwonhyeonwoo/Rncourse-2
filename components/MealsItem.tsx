import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MealsType } from '../screens/MealsOverviewScreen';

type Props = {
  data: MealsType;
};
const MealsItem = ({data}:Props) => {
  return (
    <View style={card}>
        <Image style={img} source={{ uri: data.imageUrl }} />
      <Text style={title}>{data.title}</Text>
      <View style={infoWrapper}>
        <Text>{data.duration}m</Text>
        <Text>{data.complexity}</Text>
        <Text>{data.affordability}</Text>
      </View>
    </View>
  );
}

// duration , imageUrl, complexity,affordability,title
export default MealsItem;

const { card, img, infoWrapper, title } = StyleSheet.create({
  card: {
    width:"100%",
    borderRadius: 5,
    borderWidth:1,
    flexDirection: "column",
    backgroundColor: "white",
    rowGap: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 19,
    fontWeight: "bold",
    textAlign: "center",
  },
  img: {
    width:"100%",
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  infoWrapper: {
    paddingHorizontal: 19,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 10,
  },
});