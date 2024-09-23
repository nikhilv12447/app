import { apiCall } from '../../../utils/fetchApi'

export function registerUser(email, password) {
    return apiCall.post("signup", { email, password })
}