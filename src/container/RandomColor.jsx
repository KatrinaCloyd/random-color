import React, { Component } from 'react';
import Display from '../components/color/Display';

export default class RandomColor extends Component {
    state = {
        color: '#6930C3'
    };

    colors = ['#7400B8', '#6930C3', '#5E60CE', '#5390D9', '#4EA8DE', '#48BFE3', '#56CFE1', '#64DFDF', '#72EFDD', '80FFDB'];

    render() {
        return (
            <Display color={this.state.color} />
        );
    }
}
