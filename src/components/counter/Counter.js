import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { increment, decrement } from '../../actions/counterActions';

class Counter extends Component {
    render() {
        const { value, incrementFn, decrementFn } = this.props;
        return (
            <section>
                <button onClick={() => decrementFn(1)}> - </button>
                    <span>{value}</span>
                <button onClick={() => incrementFn(1)}> + </button>
            </section>
        );
    }
}

export default connect(
    state => ({
        value: state.counterReducer.counter.value
    }),
    dispatch => ({
        incrementFn: increment(dispatch),
        decrementFn: decrement(dispatch),
    })
)(Counter);