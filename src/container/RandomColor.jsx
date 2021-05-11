import React, { Component } from 'react';
import Display from '../components/color/Display';

export default class RandomColor extends Component {
    state = {
        color: '#6930C3',
        img: ''
    };

    colors = ['#7400B8', '#6930C3', '#5E60CE', '#5390D9', '#4EA8DE', '#48BFE3', '#56CFE1', '#64DFDF', '#72EFDD', '80FFDB'];

    changeColor = () => {
        let newColor = this.colors[Math.floor(Math.random() * 10)];
        if (this.state.color === newColor) {
            this.setState({ img: 'https://media.tenor.com/images/21c7c1bb5ab46a39b20abb72d94569a6/raw' });
        }
        else {
            this.setState({ color: newColor, img: '' });
        }
    };

    componentDidMount() {
        this.interval = setInterval(() => this.changeColor(), 1000);
    };

    render() {
        return (
            <Display color={this.state.color} img={this.state.img} />
        );
    }
}


// https://media.tenor.com/images/21c7c1bb5ab46a39b20abb72d94569a6/raw
// https://media.wired.com/photos/59094a0ad8c8646f38eef2ae/master/pass/rainbow-sq.jpg