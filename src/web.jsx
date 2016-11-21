'use strict'

import React from 'react';

export default class Web extends React.Component {

    handleClick() {
        console.log("HandleClick", counter);
    }

    render() {
        return <div>
            <div>Counter Value in React = {this.state.counter}</div>
            <button onClick={this.handleClick.bind(this)}>Click</button>
        </div>

    }
}
