import { View, Text } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ArrowLeftIcon,
  HeartIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  StarIcon,
} from "react-native-heroicons/solid";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { coffeeSize } from "../data";

const Product = (props) => {
  const navigation = useNavigation();
  const [fav, setFav] = useState(false);
  const [active, setActive] = useState(1);
  const [count, setCount] = useState(1);

  const item = props.route.params;
  return (
    <View className="flex-1">
      <Image
        source={require("../image/beansBackground2.png")}
        className="w-full h-64 absolute"
        style={{ borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
      />
      <SafeAreaView className="space-y-4 flex-1">
        <View className="flex-row justify-between">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-5 rounded-full w-16 items-center mx-2 mt-1"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <ArrowLeftIcon size={30} color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setFav(!fav)}
            className="p-5 rounded-full w-16 items-center mx-2 mt-1"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <HeartIcon size={30} color={fav ? "red" : "white"} />
          </TouchableOpacity>
        </View>
        <View className="items-center pt-10">
          <Image source={item.image} className="h-52 w-52" />
        </View>
        <View
          className="mx-4 flex-row p-2 rounded-full w-24"
          style={{ backgroundColor: "#8c5319" }}
        >
          <StarIcon size={25} color={"white"} />
          <Text className="text-lg font-bold ml-1 text-white">
            {item.stars}
          </Text>
        </View>
        <View className="mx-4 flex-row justify-between">
          <Text className="text-3xl font-bold text-gray-900">{item.name}</Text>
          <Text className="font-bold text-xl">$ {item.price * count}</Text>
        </View>
        <View className="mx-4">
          <Text className="text-xl font-bold">Coffee Size</Text>
          <FlatList
            data={coffeeSize}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              let isActive = item.id == active;
              let Class = isActive
                ? "text-white text-lg font-bold"
                : "text-black text-lg";
              return (
                <TouchableOpacity
                  className="p-3 mx-3 w-24 items-center mt-2 rounded-3xl "
                  style={{
                    backgroundColor: isActive ? "#d4a574" : "rgba(0,0,0,0.07)",
                  }}
                  onPress={() => setActive(item.id)}
                >
                  <Text className={Class}>{item.size}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View className="mx-4">
          <Text className="text-lg font-bold">About</Text>
          <Text>{item.desc}</Text>
        </View>
        <View className="mx-4 flex-row justify-between">
          <Text className="font-bold mt-3 text-xl">Volume: {item.volume}</Text>
          <View className="flex-row">
            <TouchableOpacity
              onPress={() => setCount(count - 1)}
              className="p-2 border rounded-xl"
            >
              <MinusIcon size={25} color={"black"} />
            </TouchableOpacity>
            <Text className="p-2 text-xl font-bold">{count}</Text>
            <TouchableOpacity
              onPress={() => setCount(count + 1)}
              className="p-2 border rounded-xl"
            >
              <PlusIcon size={25} color={"black"} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row mx-5 p-3">
          <ShoppingBagIcon size={48} color={'black'}/>
          <TouchableOpacity className="border p-3 rounded-2xl w-60 ml-5" style={{backgroundColor:"#d4a574"}}>
            <Text className="text-2xl font-bold text-center text-white">Buy now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Product;
