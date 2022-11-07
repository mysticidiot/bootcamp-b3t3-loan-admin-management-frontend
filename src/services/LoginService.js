var apiEndpoints = require('../lib/url-endpoints')
export async function tryLogin(data){
    const response = await fetch(apiEndpoints.LOGIN_API_URL, {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify({
            "username" : data.username,
            "password" : data.password
        })
    })
    return await response.json();
}