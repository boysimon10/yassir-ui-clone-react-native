import { Text, View, TouchableOpacity, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "react-native-heroicons/outline";

export default function HeaderComponent() {
  const [isVisible, setIsVisible] = useState(true);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <View className="mb-[175px]">
      {/* Yassir pay */}
      <View className="bg-customLightPurple rounded-2xl  mx-4 flex-row items-center justify-between">
        <View className="m-6">
          <Text className="text-customDarkBlue font-sans font-semibold">
            Yassir Pay
          </Text>
          <View className="flex-row">
            <TouchableOpacity onPress={handleToggle}>
              {isVisible ? (
                <EyeIcon size={24} color="#1C0D48" />
              ) : (
                <EyeSlashIcon name="eye-slash" size={24} color="#1C0D48" />
              )}
            </TouchableOpacity>
            <Text className="py-1 mx-2 text-customDarkBlue">
              {isVisible ? "5000 XOF" : "•••••"}
            </Text>
          </View>
        </View>
        <View className="m-6">
          <TouchableOpacity className="bg-customViolet p-2 rounded-3xl">
            <Text className="text-white font-bold">+ Recharger</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Les Offres */}
      <View className="my-3 mx-4 flex-row justify-between">
        <TouchableOpacity className="bg-customLightPurple rounded-2xl h-28 w-[48%] flex-col justify-center items-center">
          <Image
            source={require("../assets/img/sport-car.png")}
            className="w-16 h-16"
          />
          <Text className="text-customDarkBlue font-semibold text-xs">
            Transport
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-customLightPurple rounded-2xl h-28 w-[48%] flex-col justify-center items-center">
          <Image
            source={require("../assets/img/pizza.png")}
            className="w-16 h-16"
          />
          <Text className="text-customDarkBlue font-semibold text-xs">
            Restaurant
          </Text>
        </TouchableOpacity>
      </View>

      <View className=" mx-4 flex-row justify-between">
        <TouchableOpacity className="bg-customLightPurple rounded-2xl h-28 w-[31%] flex-col justify-center items-center">
          <Image
            source={require("../assets/img/online-store.png")}
            className="w-16 h-16"
          />
          <Text className="text-customDarkBlue font-semibold text-xs">
            Supermarché
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-customLightPurple rounded-2xl h-28 w-[31%] flex-col justify-center items-center">
          <Image
            source={require("../assets/img/on-time.png")}
            className="w-16 h-16"
          />
          <Text className="text-customDarkBlue font-semibold text-xs">
            Livraison
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-customLightPurple rounded-2xl h-28 w-[31%] flex-col justify-center items-center">
          <Image
            source={require("../assets/img/shopping-online.png")}
            className="w-16 h-16"
          />
          <Text className="text-customDarkBlue font-semibold text-xs">
            Boutique
          </Text>
        </TouchableOpacity>
      </View>
      {/* Titre Carroussel 1 */}
      <View className="mt-6 mx-4">
        <Text className="text-customDarkBlue font-sans font-bold text-xl">
          FOOD FESTIVAL 🕺🤸‍♂️🥳
        </Text>
        <Text className="text-customDarkBlue font-sans text-sm">
          du 1er au 31/07 : Loo yor noce 😋
        </Text>
      </View>
      {/* Carroussel 1 */}
      <View className="">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row">
            <Image source={require("../assets/img/carroussel-1.png")} className="w-80 h-52 rounded-3xl my-4 mr-4 ml-4"/>
            <Image source={require("../assets/img/carroussel-1.png")} className="w-80 h-52 rounded-3xl my-4 mr-4"/>
            <Image source={require("../assets/img/carroussel-1.png")} className="w-80 h-52 rounded-3xl my-4 mr-4"/>
          </View>
        </ScrollView>
      </View>

      {/* Titre Carroussel 2 */}
      <View className="mt-6 mx-4">
        <Text className="text-customDarkBlue font-sans font-bold text-xl">
          Nos offres du moment
        </Text>
        <Text className="text-customDarkBlue font-sans text-sm">
          Le meilleur près de chez toi
        </Text>
      </View>
      {/* Carroussel 2 */}
      <View className="">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View className="flex-row">
            <Image source={require("../assets/img/carroussel-3.png")} className="w-80 h-52 rounded-3xl my-4 mr-4 ml-4"/>
            <Image source={require("../assets/img/carroussel-2.png")} className="w-80 h-52 rounded-3xl my-4 mr-4"/>
          </View>
        </ScrollView>
      </View>
      {/* Titre Carroussel 3 */}
      <View className="mt-6 mx-4">
        <Text className="text-customDarkBlue font-sans font-bold text-xl">
          Une Question
        </Text>
        <Text className="text-customDarkBlue font-sans text-sm">
          Notre service client est joignable 7j/7 de 8h-23h
        </Text>
      </View>
      {/* Carroussel 3 */}
      <View className="">
        <View className="flex  items-centerjustify-between">
          <Image source={require("../assets/img/carroussel-4.png")} className="w-[350] h-52 rounded-3xl my-4 ml-4 mr-4"/>
        </View>
      </View>
    </View>
  );
}
