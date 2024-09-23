import { apiCall } from "../utils/fetchApi"
import { editor } from "../Store/actions"

export function createTextEditor(dispatch) {
    apiCall.get("user/editor").then(({ url }) => {
        dispatch(editor.setEditorLink(url))
    })
}