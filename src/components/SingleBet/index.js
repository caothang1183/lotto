import React, { Component } from 'react';
import TableBetComponent from './TableBetComponent';

class SingleBet extends Component {
    render() {
        return (
            <div>
                <div className="row single-bet">
                    <div className="col-7 title">Single Betting</div>
                    <div className="col-3 curent-draw">Current Draw Number <span>270715</span></div>
                    <div className="col-2 time-left">Time Left <span>05</span><span>:</span><span>30</span></div>
                </div>

                <div className="row">
                    <TableBetComponent />
                    <div className="col-3 bet-rate"></div>
                </div>
            </div>
        );
    }
}

export default SingleBet;