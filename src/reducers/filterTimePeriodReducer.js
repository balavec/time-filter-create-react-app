export default function reducer(state = {
    time_period: {
        title: null,
        value: null,
        options: []
    },
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {

        case "FETCH_TIME_PERIOD": {
            return {...state, fetching: true}
        }

        case "FETCH_TIME_PERIOD_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }

        case "FETCH_TIME_PERIOD_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                time_period: action.payload,
            }
        }

        case "SET_TIME_PERIOD_VALUE": {
            return {
                ...state,
                time_period: {...state.time_period, value: action.payload},
            }
        }

        default: {}

    }

    return state
}
