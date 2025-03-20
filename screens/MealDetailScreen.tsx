import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../assets/data/dummy-data";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import IconButton from "../components/IconButton";
import { useFavorite } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/redux/store";
import { favoriteActions } from "../store/redux/favorite-slice";

type RootStackParamList = {
  mealDetail: {
    id: string;
  };
};
const MealDetailScreen = () => {
  const dispatch = useDispatch();
  const { params } = useRoute<RouteProp<RootStackParamList, "mealDetail">>();
  const ids = useSelector((state:RootState)=>state.favorite.ids);
  // const favoriteCtx = useFavorite();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isFavorite, setIsFavorite] = useState(false);

  const selectedMeals = MEALS.find((meals) => meals.id === params.id);

  const handleRightBtn = () => {
    if (isFavorite) {
      dispatch(favoriteActions.remove(params.id));
    } else {
      console.log("hello");
      dispatch(favoriteActions.add(params.id))
    }
  };
  useEffect(() => {
    if (ids.includes(params.id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={isFavorite ? "star" : "ellipse"}
            size={24}
            color="white"
            handlePress={handleRightBtn}
          />
        );
      },
    });
  }, [isFavorite, navigation, ids]);
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
