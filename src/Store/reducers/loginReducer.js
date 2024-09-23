import { createSlice } from '@reduxjs/toolkit'

export const login = createSlice({
    name: 'login',
    initialState: {
        isUserLogin: false
    },
    reducers: {
        setIsUserLogin: (state, action) => {
            state.isUserLogin = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export default login