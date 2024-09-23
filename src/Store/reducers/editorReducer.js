import { createSlice } from '@reduxjs/toolkit'

export const editor = createSlice({
    name: 'editor',
    initialState: {
        text: "",
        editorLink: ""
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        },
        setEditorLink: (state, action) => {
            state.editorLink = action.payload
        },
    }
})

// Action creators are generated for each case reducer function
export default editor