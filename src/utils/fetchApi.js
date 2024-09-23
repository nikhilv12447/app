const API_BASE_URL = "http://localhost:8080"

function get(url) {
    return fetch(`${API_BASE_URL}/${url}`, {
        headers: {
            "Content-Type": "application/json",
            "X-token": getCookie("token")
        },
    }).then(res => res.json())
}

function post(url, body) {
    return fetch(`${API_BASE_URL}/${url}`, {
        method: "post",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            "X-token": getCookie("token")
        }
    }).then(res => res.json())
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

export const apiCall = {
    get,
    post
}