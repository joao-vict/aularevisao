import React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const Tabela = ({pais, pais2, medalhas, medalhas2}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{pais}</Text>
            <Text style={styles.text}>{pais2}</Text>
            <Text style={styles.text}>{medalhas}</Text>
            <Text style={styles.text}>{medalhas2}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 30,
        color: '#333',
    }
})

export default Tabela