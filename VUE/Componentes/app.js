const app = new Vue({
    el:'#my-app',
    data:{
        name:'Hola classe, això és un exemple de COMPONENTS',
        firstName:'Eva',
        lastName: 'Tor',
        count:0
    },
    methods: {
        onAdd(){
            this.count +=1
        }
    }
})