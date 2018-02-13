export default function reducer(state = {
    multifilter: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {

        case "FETCH_MULTIFILTER": {
            return {...state, fetching: true}
        }

        case "FETCH_MULTIFILTER_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }

        case "FETCH_MULTIFILTER_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                multifilter: action.payload,
            }
        }

        case "SET_MULTIFILTER_VALUE": {
            return {
                ...state,
                multifilter: {...state.multifilter, value: action.payload},
            }
        }

        default: {}

    }

    return state
}
