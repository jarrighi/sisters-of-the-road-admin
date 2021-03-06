import React, { Component } from 'react';


class DollarInput extends Component {
    constructor () {
        super();
        this.state = {
            amount: ''
        };
    }

    onAmountChange (amount) {
        this.setState({amount: amount});
        this.props.updateAmount(amount);
    }

    render () {
        return (
            <input id="amount"
                class="pa2 input-reset ba bg-transparent hover-bg-light-gray w-100"
                type="number"
                min="0"
                step="0.25"
                value={this.state.amount}
                placeholder={0}
                onChange={(event) => this.onAmountChange(event.target.value)} />
         );
    }
}

export default DollarInput;
