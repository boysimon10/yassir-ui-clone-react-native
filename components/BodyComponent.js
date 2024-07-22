import { Text, View, TouchableOpacity, ScrollView } from "react-native";
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
        <View className="bg-customLightPurple rounded-2xl h-28 w-[49%]">
          <Text></Text>
        </View>
        <View className="bg-customLightPurple rounded-2xl h-28 w-[49%]">
          <Text></Text>
        </View>
      </View>

      <View className=" mx-4 flex-row justify-between">
        <View className="bg-customLightPurple rounded-2xl h-28 w-[32%]">
          <Text></Text>
        </View>
        <View className="bg-customLightPurple rounded-2xl h-28 w-[32%]">
          <Text></Text>
        </View>
        <View className="bg-customLightPurple rounded-2xl h-28 w-[32%]">
          <Text></Text>
        </View>
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
            <View className="bg-customViolet rounded-2xl h-48 w-72 my-4 ml-4 mr-4"></View>
            <View className="bg-customViolet rounded-2xl h-48 w-72 my-4 mr-4"></View>
            <View className="bg-customViolet rounded-2xl h-48 w-72 my-4 mr-4"></View>
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
            <View className="bg-customViolet rounded-2xl h-48 w-72 my-4 ml-4 mr-4"></View>
            <View className="bg-customViolet rounded-2xl h-48 w-72 my-4 mr-4"></View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
