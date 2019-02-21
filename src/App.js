import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BettingTemplate from './components/BettingTemplate';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" component={BettingTemplate} />
                    </Switch>
                </div>
            </Router>
        );
    }
}


export default App;
