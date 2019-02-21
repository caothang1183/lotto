import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    render() {
        return (
            <div className="header">
                <p className="logo">Loto</p>
                <ul>
                    <li><Link to={"/single-bet"}>Single Bet</Link></li>
                    <li><Link to={"/red-button"}>Red Button</Link></li>
                    <li><Link to={"/under-over"}>Under Over</Link></li>
                    <li><Link to={"/even-odd"}>Even Odd</Link></li>
                    <li><Link to={"/dark-number"}>Dark Number</Link></li>
                    <li></li>
                </ul>
            </div>
        );
    }
}


export default HeaderComponent;
