import React, { Component } from 'react';
import Background from './img/dev17.jpg';
import './Header.css';

const mystyles = {
    backgroundImage: `url(${Background})`,
    height: '150vh',
    backgroundSize: 'cover'

}


class Header extends Component {

    render() {
        return (
            <header style={mystyles}>
                <h1>{this.props.title}</h1>
                <p>MongoDB.Express.React.NodeJs</p>
                <a href="#button">{this.props.button}</a>

            </header>




        );
    }

};


export default Header;