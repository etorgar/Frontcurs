const app = new Vue({
    el:'#my-app',
    data (){
        return {
            detailsAreVisible: false,
            friends:[
                {
                    id: 'manuel', 
                    name:'Manuel Lorenz', 
                    phone:'01234 5678 991', 
                    email:'manuel@localhost.com',

                },
                {
                    id: 'julie', 
                    name:'Julie Jones', 
                    phone:'09876 543 221', 
                    email:'julie@localhost.com',

                }, 
                {
                    id: 'monica', 
                    name:'Monica Jones', 
                    phone:'09876 543 221', 
                    email:'monica@localhost.com',

                },    

            ],
        
            props: ['friends'],
            data() {
                return {
                    detailsAreVisible: false,
                };
            },
            methods: {
                toggleDetails () {
                    this.detailsAreVisible= !this.detailsAreVisible
                }
            },
           
            }
        }
    },

