// const BASE_URL = '/api/users'
// const LOGIN_URL='/api/users/login'

// export async function signUp(userData) {

//     const res = await fetch(BASE_URL, {
//         method: 'POST',
//         headers: { 'Content-Type' : 'application/json' },
//         body: JSON.stringify(userData)
//     })

//     if (res.ok) {
//         return res.json()
//     } else {
//         throw new Error('Invalid Sign Up')
//     }
// }

// export async function login(userData) {

//     const res = await fetch(LOGIN_URL, {
//         method: 'POST',
//         headers: { 'Content-Type' : 'application/json' },
//         body: JSON.stringify(userData)
//     })

//     if (res.ok) {
//         return res.json()
//     } else {
//         throw new Error('Invalid LogIn Up')
//     }
// }


// users-api.js

// Add the following import
import sendRequest from './send-requests.js';
const BASE_URL = '/api/users';

// Refactored code below
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`)
}