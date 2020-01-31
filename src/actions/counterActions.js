const increment = dispatch => () => {
    dispatch({
        type: 'INCREMENT',
        payload: {
            incrementValue: 1
        }
    });
};

const decrement = dispatch => () => {
    dispatch({
        type: 'DECREMENT',
        payload: {
            decrementValue: 1
        }
    });
};

export { increment, decrement }