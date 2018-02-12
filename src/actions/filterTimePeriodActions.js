export function fetchFilterTimePeriod() {
    return {
        type: "FETCH_TIME_PERIOD_FULFILLED",
        payload: {
            title: "Time Period",
            value: 1,
            options: [
                {
                    title: 'Most Recent Month',
                    value: 1
                },
                {
                    title: 'Most Recent 3 Months',
                    value: 2
                },
                {
                    title: 'Most Recent 12 Months',
                    value: 3
                },
                {
                    title: 'Year to Date',
                    value: 0
                }
            ]
        }
    }
}

export function setFilterTimePeriodValue(value) {
    return {
        type: "SET_TIME_PERIOD_VALUE",
        payload: value
    }
}
