import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import BodyComponent from '../components/BodyComponent';

export default function HomeScreen() { 
    return (
        <View>
            <HeaderComponent />
            <ScrollView showsVerticalScrollIndicator={false}>
                <BodyComponent/>
            </ScrollView>
        </View>
    );
}