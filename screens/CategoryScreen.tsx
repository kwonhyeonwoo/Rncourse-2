import { FlatList, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import { CATEGORIES } from '../assets/data/dummy-data'
import CategoryGridTitle from '../components/CategoryGridTitle'

type Props={
  item:{
    title:string;
    color:string;
    id:string;
  }
}
const CategoryScreen = () => {
  const renderItem = ({ item}:Props) => {
    return <CategoryGridTitle item={item}  />;
  };

  return (
    <SafeAreaView>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
        />
    </SafeAreaView>
  );
}

export default CategoryScreen

const styles = StyleSheet.create({
    listsContainer:{
    }
})