import React, { Component } from 'react';

// import './App.css';

import './Navigation.css';

class Navigation extends Component {
    render() {
        const sections = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];

        const navLinks = sections.map(sections => {
            return (
                <li><a href={'#' + sections} >{sections}</a></li>

            )

        });
        return (
            <nav>
                <h2 className="logo">{this.props.logoTitle}</h2>
                <ul>
                    {navLinks}
                </ul>
            </nav>


        );

    }
}

export default Navigation;
