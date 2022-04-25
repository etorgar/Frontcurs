// Acceder a los productos de manera dinamica




document.addEventListener('DOMContentLoaded',() =>{
    printCardsProduts();
});

function printCardsProduts(){
    products.forEach(item =>{
    const card = document.getElementById('card'+ item.id);
    card.querySelector('img').setAttribute('src', item.img);
    card.querySelector('p').textContent= item.price
    card.querySelector('.card-body ul li i').textContent= item.type
    card.querySelector('h3').textContent= item.name
    
})
}
