import axios from "axios"

const API_URL = "http://localhost:3000/users"

//helper function to post registration data to backend
const register = (first_name, last_name, username, email, password) => {
    return axios.post(API_URL + "signup", {
        first_name,
        last_name,
        username,
        email,
        password,
    })
}


//helper to post user id to login and saves JWT to local storage.
const login = (username, password) => {
    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((response) => {
            if(response.data.accessToken){
                localStorage.setItem("user", JSON.stringify(response.data))
            }
            return response.data
        })
}


//helper function to faciliate logout, removes JWT from local storage.
const logout =() => {
    localStorage.removeItem("user")
};

export default {
    register,
    login,
    logout,
}