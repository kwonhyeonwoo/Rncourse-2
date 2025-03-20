import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { MealsType } from './MealsOverviewScreen'
import MealsItem from '../components/MealsItem'
import { useFocusEffect } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState } from '../store/redux/store'
import { MEALS } from '../assets/data/dummy-data'


const FavoritScreen = () => {
    const [data, setData] = useState<MealsType[]>([]);
    const ids = useSelector((state:RootState)=>state.favorite.ids);
    useFocusEffect(
        useCallback(()=>{
            setData(MEALS.filter((meals)=>ids.includes(meals.id)))
        },[])
    )
      const renderMealsItems = ({ item }: { item: MealsType }) => {
        return <MealsItem data={item} />;
      };
  return (
    <View style={styles.wrapper}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={renderMealsItems} 
          />
        </View>
  )
}

export default FavoritScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: "#DBDBDB",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
});