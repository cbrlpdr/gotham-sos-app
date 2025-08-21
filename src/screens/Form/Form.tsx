import React, { useState } from 'react';
import { Alert, Button, Image, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './FormStyle';
import { getCurrentLocation } from '../../services/locationService';

interface FormProps {
    handleBackButton: () => void;
}

export function Form({ handleBackButton }: FormProps) {

    const [location, setLocation] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleGetLocation = async () => {
        setLocation('Carregando localização...');
        const coord = await getCurrentLocation();
        if (coord) setLocation(`${coord.latitude.toFixed(4)}, ${coord.longitude.toFixed(4)}`)
    }


    return (
        <>
            <View style={styles.containerHeader}>
                <Image
                    style={styles.img}
                    source={require('../../../assets/icon.jpg')}
                />
                <TouchableOpacity
                    onPress={handleBackButton}
                >
                    <Image
                        style={styles.backButton}
                        source={require('../../../assets/back.png')}
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.containerForm} >
                <Text style={styles.instructions}>Informe os dados abaixo para que nossa equipe de segurança possa localizar você e prestar atendimento imediato</Text>
                <Text style={styles.label}>NOME: </Text>
                <TextInput
                    value={name}
                    onChangeText={(input) => setName(input)}
                    style={styles.input}
                />

                <Text style={styles.label}>TELEFONE: </Text>
                <TextInput
                    value={phone}
                    onChangeText={(input) => setPhone(input)}
                    keyboardType='phone-pad'
                    style={styles.input}
                />

                <Text style={styles.label}>
                    {location}
                </Text>

                <Button onPress={handleGetLocation}
                    title='Obter Localização'
                />
                <TouchableOpacity
                    onPress={() => {
                        if ( !location.trim() || !phone.trim() || !name.trim()) Alert.alert('Erro!', 'Preencha todas as informações!')
                        else if(location == "Carregando localização...") Alert.alert('Localização sendo carregada...', 'Por favor, aguarde e tente novamente')
                            else {
                            Alert.alert('Suas informações foram enviadas!', 'Em breve você estará a salvo! 🦇');
                            handleBackButton
                        }
                    }}
                >
                    <Text style={styles.sendButton}>
                        ENVIAR INFORMAÇÕES
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
}