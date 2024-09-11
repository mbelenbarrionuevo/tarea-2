import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../../components/card';  

const App = () => {
    const data = ['Tarjeta 1', 'Tarjeta 2', 'Tarjeta 3'];

    return (
        <View style={styles.container}>
            {data.map((item, index) => (
                <Card key={index} text={item} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#b8b2ad'
    },
});

export default App;