import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {FontAwesome5} from '@expo/vector-icons'

const Actions = ({play, canPlay}) => {
  return (
    <View style ={styles.actions}>
        <TouchableOpacity // batu
            disabled={!canPlay}
            style={styles.actionButton}
            onPress={() => play(1)}
        >
            <FontAwesome5 name = {'hand-rock'} size ={32} color='white' />
        </TouchableOpacity>

        <TouchableOpacity // kertas
            disabled={!canPlay}
            style={styles.actionButton}
            onPress={() => play(2)}
        >
            <FontAwesome5 name = {'hand-paper'} size ={32} color='white' />
        </TouchableOpacity>

        <TouchableOpacity // gunting
            disabled={!canPlay}
            style={styles.actionButton}
            onPress={() => play(3)}
        >
            <FontAwesome5 name = {'hand-scissors'} size ={32} color='white' style = {{ transform: [{rotate: '67deg'}]}}/>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    actions: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    actionButton: {
        width: 64,
        height: 64,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#1F319D",
        borderRadius: 32,
    }
})

export default Actions