//This can be parted in 3 diffrent modules, but god no
import axios from 'axios'

const auth = {
    state: {
        email: null,
        password: null,
        tokenID: null,
        userID: null
    }, 
    getters: {
        email: state => {
            return state.email;
        },
        password: state => {
            return state.password;
        },
        tokenID: state => {
            return state.tokenID;
        },
        userID: state => {
            return state.userID;
        }
    },
    mutations: {
        saveUserData (state, data) {
            state.email = data.email,
            state.password = data.password
            state.userID = data.id;
        },
        takeToken(state, data) {
            state.tokenID = data.tokenID
        },
        clearUserData (state) {
            state.email = null
            state.password = null
            state.tokenID = null,
            state.userID = null
        },
        isAuth: state => {
            return state.tokenID !== null
        }
    },
    actions: {
        register(context, payload) {
            return new Promise((resolve, reject) => {
                axios.post(`https://localhost:44388/api/auth/register`, {
                    mail: payload.email,
                    password: payload.password
                },{
                    headers: {'Access-Control-Allow-Origin': '*'}
                }).then(response => {
                    context.commit('saveUserData', {email: response.data.email, password: response.data.password, id: response.data.id});              
                    resolve(response);
                }).catch(error => {
                    reject(error);
                })
            })
        },

        login(context, payload) {
            return new Promise((resolve, reject) => {
                axios.post(`https://localhost:44388/api/auth/login`, {
                    mail: payload.email,
                    password: payload.password
                }, {
                    headers: {'Access-Control-Allow-Origin': '*'}
                }).then(response => {
                    console.log(response.data);
                    context.commit('saveUserData', {email: response.data.email, password: response.data.password, id: response.data.id});
                    context.commit('takeToken', {tokenID: response.data.token});
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + 200000 * 1000);
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('expirationDate', expirationDate);
                    localStorage.setItem('userID', response.data.id);
                    resolve(response);
                }).catch(error => {
                    console.trace(error);
                    reject(error);
                })
            })
        },

        checkIfLoggedIn (context) {
            const token = localStorage.getItem('token')
            const expirationDate = localStorage.getItem('expirationDate')
            const userId = localStorage.getItem('userID')
            if (!token) {
              return
            }
            if (new Date() >= expirationDate) {
              return
            }
            context.commit('saveUserData', {userID: userId});
            context.commit('takeToken', {tokenID: token})
        },

        logout (context) {
            context.commit('clearUserData');
            localStorage.removeItem('token');
            localStorage.removeItem('expirationDate');
            localStorage.removeItem('userID');
        }
    }
}

export default auth;