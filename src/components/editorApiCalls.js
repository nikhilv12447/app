import { apiCall } from "../utils/fetchApi"

export function validateEditor(dispatch, editorId) {
    return apiCall.post("user/validateEditor", { editorId }).then(({ isValid }) => {
        return isValid
    })
}