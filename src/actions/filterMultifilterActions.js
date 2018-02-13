export function fetchMultifilterPeriod() {
    return {
        type: "FETCH_MULTIFILTER_FULFILLED",
        payload: function() {
            var json = window.show_filters_json;
            return json;
        }
    }
}

export function setMultifilterValue(value) {
    return {
        type: "SET_MULTIFILTER_VALUE",
        payload: value
    }
}
