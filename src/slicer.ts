import {createSlice} from "@reduxjs/toolkit";

export interface CounterState {
    secretPath: string
}

const initialState: CounterState = {
    secretPath: "123321",
}

export const counterSlice = createSlice({
    name: 'secretPath',
    initialState,
    reducers: {
        setSecretPath: (state,action) => {
           state.secretPath = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setSecretPath } = counterSlice.actions

export default counterSlice.reducer