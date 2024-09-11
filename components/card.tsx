import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const Card = ({ text }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    return (
        <Pressable onPress={handlePress}>
            <View style={[styles.card, isPressed && styles.cardPressed]}>
                <Text style={[styles.text, isPressed && styles.textPressed]}>
                    {text}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f3141e',
        padding: 60,
        marginVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
    },
    cardPressed: {
        backgroundColor: '#f39014',
    },
    text: {
        fontSize: 25,
        color: '#f8f6f6',
    },
    textPressed: {
        color: '#090909',
    },
});

export default Card;