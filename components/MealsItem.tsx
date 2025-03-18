import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MealsType } from '../screens/MealsOverviewScreen';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  data: MealsType;
};

type DetailProps={
  mealDetail:{
    id:string;
  }
}
const MealsItem = ({data}:Props) => {
    const navigate = useNavigation<NativeStackNavigationProp<DetailProps>>();
    const handleDetailNav = ()=>{
      navigate.navigate('mealDetail',{id:data.id})
    }
    useLayoutEffect(()=>{
        navigate.setOptions({
            title:data.id
        });
    },[navigate])
  return (
    <Pressable style={card} onPress={handleDetailNav}>
      <View style={img}>
        <Image height={200} source={{ uri: data.imageUrl }} />
      </View>
      <Text style={title}>{data.title}</Text>
      <View style={infoWrapper}>
        <Text>{data.duration}m</Text>
        <Text>{data.complexity}</Text>
        <Text>{data.affordability}</Text>
      </View>
    </Pressable>
  );
}

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