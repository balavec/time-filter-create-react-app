import {combineReducers} from "redux"

import filter_time_period from "./filterTimePeriodReducer"
import filter_multifilter from "./filterMultifilterReducer"

export default combineReducers({
    filter_time_period,
    filter_multifilter
})
