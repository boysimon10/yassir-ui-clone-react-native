import { StyleSheet, Text, View } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';

export default function HomeScreen() { 
    return (
        <View>
            <HeaderComponent />
            <BodyComponent />
        </View>
    );
}
