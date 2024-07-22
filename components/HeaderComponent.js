import { Text, View, TouchableOpacity } from "react-native";
import { ChevronRightIcon } from "react-native-heroicons/outline";

export default function HeaderComponent() {
  return (
    <View className="h-auto bg-white shadow-sm flex-row justify-between items-center">
      <View className="m-4">
        <Text className="text-customDarkBlue font-sans font-bold text-xl">
          Bienvenue, Ablaye Ndiaye
        </Text>
        <Text className="text-customDarkBlue font-sans text-sm">
          Ouest foire, Dakar, Dakar, Senegal{" "}
          <ChevronRightIcon color="#F20587" size={16} className="" />
        </Text>
      </View>
      <TouchableOpacity>
        <View className="bg-customSlate rounded-full w-10 h-10 m-4">
          <Text className="text-white font-semibold text-center text-3xl">
            A
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
