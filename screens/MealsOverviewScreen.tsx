import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Route, RouteProp, useRoute } from '@react-navigation/native'
import { MEALS } from '../assets/data/dummy-data';
import MealsItem from '../components/MealsItem';

export type MealsType = {
  affordability: string;
  categoryIds: string[];
  complexity: string;
  duration:number;
  id:string;
  imageUrl:string;
  ingredients:string[];
  isLactoseFree:boolean;
  isVegetarian:boolean;
  steps:string[];
  title:string;
};

type MealOverViewProp = {
  mealOverview:{
    id:string;
  }
}

const MealsOverviewScreen = () => {
  const { params } = useRoute<RouteProp<MealOverViewProp,"mealOverview">>();
  const data = MEALS.filter((item) => {
    return item.categoryIds.indexOf(params.id) >= 0;
  });
  
  const renderMealsItems = ({ item }: { item: MealsType }) => {
    return (
      <MealsItem data={item}/>
    );
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderMealsItems} 
      />
    </View>
  );
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
  wrapper:{
    flex:1,
    padding:20,
    backgroundColor:"#DBDBDB",
    alignItems:"center",
    flexDirection:"column",
    justifyContent:"center",
  }
})