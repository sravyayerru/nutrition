import React from 'react';
import 'react-native';
import App from '../App';

import renderer from 'react-test-renderer';
it('renders correctly', () => {
    const hello = renderer.create(
    <App />
        );
});