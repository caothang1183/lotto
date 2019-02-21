import React, { Component } from 'react';
import HeaderComponent from './layout/HeaderComponent';
import FooterComponent from './layout/FooterComponent';
import { Switch, Route } from 'react-router-dom';
import SingleBet from './SingleBet/index';

class BettingTemplate extends Component {
    render() {
        return (
            <div className="root">
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route exact path="/" component={SingleBet} />
                        <Route path="/single-bet" component={SingleBet} />
                    </Switch>
                </div>
                <FooterComponent />
            </div>
        );
    }
}


export default BettingTemplate;
