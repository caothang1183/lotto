import React, { Component } from 'react';
import Numberbox from '../commons/NumberBox';

class TableBetComponent extends Component {
    render() {
        return (
            <div className="table-bet col-9">
                <p>You can select as much number as you want and there will be 20 winning numbers</p>
                <ShowNumberBox />
            </div>
        );
    }
}

var ShowNumberBox = (props) => {
    var boxes = [];
    for (var i = 1; i <= 80; i++) {
        boxes.push(<Numberbox number={i} key={i} />);
    }
    return boxes;
}


export default TableBetComponent;