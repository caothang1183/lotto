import React, { Component } from 'react';

class NumberBox extends Component {
    render() {
        const { number} = this.props;
        return (
            <div className="box">
                {number}
            </div>
        );
    }
}


export default NumberBox;