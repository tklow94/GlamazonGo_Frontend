//helper funciton that when called checks to see if there is a user item with access token, if there is, access to the protected pages is gained by returning authorization header.
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if(user && user.accessToken){
        return {Authorization: `Bearer ` + user.accessToken};
    }else{
        return {}
    }
}