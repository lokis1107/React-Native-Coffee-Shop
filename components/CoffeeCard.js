import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { PlusIcon, StarIcon } from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CoffeeCard = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: "#8c5319",
        height: 350,
        width: 250,
      }}
      className="mt-16"
    >
      <View
        style={{ shadowColor: "black", elevation: 10 }}
        className=" flex-row justify-center -mt-14 shadow-lg"
      >
        <Image source={item.image} className="h-40 w-40" />
      </View>
      <View>
        <View className="mx-4 mt-3">
          <Text className="text-2xl font-bold">{item.name}</Text>
        </View>
        <View
          className="mx-4 mt-2 flex-row w-20 p-1 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        >
          <StarIcon size={20} color={"white"} />
          <Text className="ml-2 text-xl font-bold -mt-1">{item.stars}</Text>
        </View>
        <View className="flex-row mx-5 mt-4">
          <Text className="text-gray-400 text-lg">Volume:</Text>
          <Text className="text-lg font-bold ml-2 text-gray-50">
            {item.volume}
          </Text>
        </View>
        <View className="mt-10 mx-5 flex-row justify-between">
          <Text className="text-2xl font-bold text-white mt-2">
            $ {item.price}
          </Text>
          <TouchableOpacity
            className="p-3 rounded-full bg-white"
            onPress={() => navigation.navigate("Product", { ...item })}
          >
            <PlusIcon size={30} color={"black"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoffeeCard;
