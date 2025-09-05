import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import CustomButton from "../components/CustomButton";
import { TouchableOpacity } from "react-native-gesture-handler";

type Book = {
    id: string;
    title: string;
    author: string;
    image_url: string;
};

export default function Home() {
    const { user } = useAuth();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: "bold", color: "black", fontSize: 22 }}>
                ¡Bienvenido {user?.email || ''}!
            </Text>
        </View>
    );
}

//