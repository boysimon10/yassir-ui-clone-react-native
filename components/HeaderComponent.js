import { Text, View } from 'react-native';

export default function HeaderComponent() { 
    return (
        <View className="h-auto bg-white shadow-sm">
            <View className="m-4">
                <Text className='text-customDarkBlue font-sans font-bold text-xl'>Bienvenue, Ablaye Ndiaye</Text>
                <Text className='text-customDarkBlue font-sans text-sm'>Ouest foire, Dakar, Dakar, Senegal  <Text className="font-bold text-customPink">{'>'}</Text></Text>
            </View>
            <View>
                
            </View>
        </View>
    );
}
