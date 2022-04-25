document.querySelectorAll(".cardProduct").forEach(function (element){
    element.addEventListener('click', function(e){
        var dataId = element.getAttribute ('data-id');
        alert(dataId);
        if (e.target.classList.contains('cardAdd')) {
            addToCart(dataId);
        }
        if (e.target.classList.contains('cardRemove')){
            removeFromCart(dataId);
        }
    })
})

function addToCart(id) {
    alert("add to cart")
 }
 
 
 function removeFromCart(id) {
     alert("remove to cart")
 }