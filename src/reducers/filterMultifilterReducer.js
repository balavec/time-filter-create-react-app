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

            const updated_index = {...state.multifilter[action.index], value: action.payload};
            const multifilter = [...state.multifilter.slice(0, action.index), updated_index, ...state.multifilter.slice(action.index + 1)];

            return {
                ...state,
                multifilter: multifilter,
            }

        }

        default: {}

    }

    return state
}
