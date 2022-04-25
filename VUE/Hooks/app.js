
var app = new Vue({
el: '#app',
data() {

},
mounted() {
    console.log("El componente " + this.$options.el + " ha sido montado");
    this.$refs.nom
    console.log(this.$refs.nom);
    }
})

