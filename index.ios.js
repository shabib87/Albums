// index.ios.js - code entry point for ios

// Impost library
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a Component
const App = () => (
    <Header />
);

// Render it to the device

AppRegistry.registerComponent('Albums', () => App);
