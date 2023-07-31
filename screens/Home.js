import { View, Text } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BellIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { categories, coffeeItems } from "../data";
import Carousel from "react-native-snap-carousel-fg";
import CoffeeCard from "../components/CoffeeCard";

const Home = () => {
  const [active, setActive] = useState(1);
  return (
    <View className="flex-1">
      <StatusBar hidden />
      <View className="relative flex-1 bg-white">
        <Image
          source={require("../image/beansBackground1.png")}
          className="w-full opacity-10 absolute"
          style={{ height: 200 }}
        />
        <SafeAreaView className="flex-1">
          <View className="flex-row p-4 justify-between items-center">
            <Image
              source={require("../image/avatar.png")}
              className="h-9 w-9 rounded-full"
            />
            <View className="flex-row mr-2">
              <MapPinIcon size={30} color={"#d4a574"} />
              <Text className="text-lg font-bold">India, Tamil Nadu</Text>
            </View>
            <BellIcon size={30} color={"black"} />
          </View>
          <View className="mt-16 mx-5 mb-5">
            <View className="flex-row items-center bg-[#e6e6e6] rounded-full justify-between">
              <TextInput placeholder="Search" className="font-semibold p-4" />
              <TouchableOpacity
                className="px-4 mx-3 p-3 rounded-full"
                style={{ backgroundColor: "#d4a574" }}
              >
                <MagnifyingGlassIcon size={20} color={"white"} />
              </TouchableOpacity>
            </View>
          </View>

          {/* menu list */}
          <View className=" mt-2">
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                let isActive = item.id == active;
                let TextClass = isActive ? "text-white font-bold" : "";
                return (
                  <TouchableOpacity
                    onPress={() => setActive(item.id)}
                    style={{
                      backgroundColor: isActive
                        ? "#d4a574"
                        : "rgba(0,0,0,0.07)",
                    }}
                    className="p-4 mx-3 rounded-3xl"
                  >
                    <Text className={TextClass}>{item.title}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          {/* Coffee List */}
          <View className="py-2">
            <Carousel
              containerCustomStyle={{ overflow: "visible" }}
              data={coffeeItems}
              loop={true}
              renderItem={({ item }) => <CoffeeCard item={item} />}
              firstItem={1}
              inactiveSlideOpacity={0.75}
              inactiveSlideScale={0.77}
              sliderWidth={400}
              itemWidth={230}
              slideStyle={{ display: "flex", alignItems: "center" }}
            />
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
};

export default Home;
