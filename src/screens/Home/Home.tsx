import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './HomeStyle';

interface HomeProps{
    handleSOSButton: () => void;
}

export function Home({handleSOSButton}: HomeProps) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={require('../../../assets/icon.jpg')} />
            <TouchableOpacity
                onPress={handleSOSButton}>
                <Image
                style={styles.sosButton}
                source={require('../../../assets/sos.png')} />
            </TouchableOpacity>


        </View>
    );
}