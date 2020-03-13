import { createStore } from 'redux';

const countReducer = (state = { count: 0 },action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ?
            //     action.decrementBy : 1
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state
    }
};

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
})

//Action -> an object that gets sent to the store 
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 'design'
// });

//Action creator - functions that return 
// const incrementCount = (payload = {}) => {
//     return {
//         type: 'INCREMENT',
//         incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
//     }
// }

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

// const decrementCount = (payload = {}) => {
//     return {
//         type: 'DECREMENT',
//         decrementBy: typeof payload.decrementBy === 'number' ? payload.decrementBy : 1
//     }
// }

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
}
const reset = () => {
    return {
        type: 'RESET'
    }
}

// const set = (payload = {}) => {
//     return {
//         type: 'SET',
//         count: payload.count
//     }
// }

const set = ({ count }) => {
    return {
        type: 'SET',
        count
    }
}

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(set({ count: 150 }))
