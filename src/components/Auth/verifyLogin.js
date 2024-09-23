import { apiCall } from '../../utils/fetchApi'

export function verifyLogin() {
    return apiCall.get("user/verify")
}