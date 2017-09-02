/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView
} from 'react-native';

import Timer from '../components/Timer';
import BottomMenu from '../components/BottomMenu';
import BottomButton from '../components/BottomButton';
import Lap from '../components/Lap';

const display = Dimensions.get('window');

export default class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.timeContainer}>
                    <Timer />
                </View>
                <ScrollView style={styles.lapContainer}>
                    <Lap index={1} time="0:12:22" />
                    <Lap index={2} time="0:32:22" />
                    <Lap index={3} time="1:02:35" />
                </ScrollView>
                <BottomMenu>
                    <BottomButton>START</BottomButton>
                    <BottomButton>LAP</BottomButton>
                    <BottomButton>STOP</BottomButton>
                </BottomMenu>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
    },
    timeContainer: {
        width: display.width,
        height: display.width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    lapContainer: {
        flex: 1,
    }
});
