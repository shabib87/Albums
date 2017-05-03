// index.ios.js - code entry point for ios

// Impost library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a Component
const App = () => (
    <View style={{ flex: 1 }}>
        < Header headerText={'Albums'} />
        < AlbumList />
    </View>
);

// Render it to the device

AppRegistry.registerComponent('Albums', () => App);
