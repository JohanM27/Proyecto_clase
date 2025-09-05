import { Alert, StyleSheet, Text, View, Image } from "react-native";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

export default function Login({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();

    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert('Error', 'Por favor complete todos los campos');
            return;
        }
        login(email);
        navigation.navigate('HomeScreen', { correo: email });
    };

    return (
        <View style={styles.container}>
            {/* Imagen local mostrada arriba del formulario */}
                <View style={{ alignItems: 'center', marginBottom: 24 }}>
                    <Image source={require('../assets/Honduras.png')} style={{ width: 120, height: 120, borderRadius: 12 }} resizeMode="contain" />
            </View>
            <View style={styles.backgroundCard}>
                <CustomInput
                    type="email"
                    value={email}
                    title={"Correo"}
                    onChange={setEmail}
                />
                <CustomInput
                    type="password"
                    value={password}
                    title={"Contraseña"}
                    onChange={setPassword}
                />
                <CustomButton title="Iniciar Sesión" onPress={handleLogin} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E2C', // Fondo oscuro moderno
        padding: 20,
    },
    backgroundCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 30,
        width: '85%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
});