import { apiCall } from '../../../utils/fetchApi'

export function loginUser(email, password) {
    return apiCall.post("login", { email, password }).then(({ statusCode, token, message }) => {
        if (statusCode === 200) {
            setCookie("token", token)
            return token
        }

        throw new Error(message)
    })
}

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}