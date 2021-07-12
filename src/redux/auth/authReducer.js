import { createReducer, combineReducers } from '@reduxjs/toolkit'

const token = createReducer(null, {
    ["tokenAction"]: () => null
})

export default combineReducers({token})