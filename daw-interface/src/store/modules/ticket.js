import axios from '../../globals/axios';

const ticket = {
    state: {
        ticketData: {}
    },
    getters: {
        ticketData: state => {
            return state.ticketData;
        }

    },
    mutations: {
        fillTicketData(state, data) {
            state.ticketData = data.ticket;
        }

    },
    actions: {
        getTicketData() {
            return new Promise((resolve, reject) => {
                axios
                  .get(`/ticket/8`, {
                    headers: {'Access-Control-Allow-Origin': '*'}
                }).then(response => {
                    console.log(response.data)
                    resolve(response);
                }).catch(error => {
                    reject(error);
                })
            })
        },
        postTicketData(context, payload) {
            return new Promise((resolve, reject) => {
                axios
                  .post(`/ticket/`, {
                     userId: localStorage.getItem('userID'),
                     categoryId: 1,
                     title: payload.title,
                     content: payload.content,
                     color: payload.color,
                     dateCreated: payload.dateCreated
                  }, {
                    headers: {'Access-Control-Allow-Origin': '*'}
                }).then(response => {
                    context.commit('fillTicketData', {ticketData: response.data})
                    console.log(response.data);  
                    resolve(response);
                }).catch(errors => {
                    reject(errors);
                })
            })

        }
    }
}

export default ticket;