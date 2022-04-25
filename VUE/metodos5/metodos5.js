var vm=new Vue({
    el:'#app',
    data:{
        goals:[],
        enteredValue:'HOLA'
    }
});




mostrar:true,
mensaje: "Benvingut a Vue",
imagen:"img/vue.jpg",
},
methods:{
    toggleMostrar function (){
        console.log("antes" + this.mostrar);
        this.mostrar= !this.mostrar; //negación
        console.log("despues" + this.mostrar)
    },
},
});
