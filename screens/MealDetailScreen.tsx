import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../assets/data/dummy-data";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import IconButton from "../components/IconButton";

type RootStackParamList = {
  mealDetail: {
    id: string;
  };
};
const MealDetailScreen = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, "mealDetail">>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const selectedMeals = MEALS.find((meals) => meals.id === params.id);
  const handleRightBtn = () => {};
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon="star" size={24} color="white" handlePress={handleRightBtn}/>
      },
    });
  }, [navigation]);
  return (
    <ScrollView style={wrapper}>
      <Image
        style={{ width: "100%", height: 350 }}
        source={{ uri: selectedMeals?.imageUrl }}
      />
      <View style={titleWrapper}>
        <Text style={title}>{selectedMeals?.duration}M</Text>
        <Text style={title}>{selectedMeals?.complexity}</Text>
        <Text style={title}>{selectedMeals?.affordability}</Text>
      </View>
      <View style={[customTextBox]}>
        <Text style={customTitle}>Ingredients</Text>
        <View style={subTitleBox}>
          {selectedMeals?.ingredients.map((item: string[], idx: number) => (
            <Text key={idx} style={cusTomSubTitle}>
              {item}
            </Text>
          ))}
        </View>
      </View>
      <View style={[customTextBox]}>
        <Text style={customTitle}>Steps</Text>
        {selectedMeals?.steps.map((item: string[], idx: number) => (
          <Text key={idx} style={cusTomSubTitle}>
            {item}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};
//  affordability,complexity,duration,imageUrl,ingredients,steps
export default MealDetailScreen;

const {
  wrapper,
  customTextBox,
  customTitle,
  cusTomSubTitle,
  titleWrapper,
  subTitleBox,
  title,
} = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
  },
  titleWrapper: {
    marginTop: 20,
    flexDirection: "row",
    columnGap: 15,
    justifyContent: "center",
  },
  customTextBox: {
    marginTop: 20,
    alignItems: "center",
    rowGap: 5,
  },
  customTitle: {
    width: "100%",
    textAlign: "center",
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    color: "white",
  },
  subTitleBox: {
    width: "100%",
    flexDirection: "column",
    rowGap: 5,
  },
  cusTomSubTitle: {
    width: "100%",
    color: "white",
    padding: 7,
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#e2b497",
    flexDirection: "row",
  },
});
