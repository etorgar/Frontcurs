//Ejercicio igual que shopcards01 pero de manera dinamica
document.addEventListener('DOMContentLoaded',() =>{
    printCards();
});

function printCards(){
    for (let i=1; i<10; i++){
    const card = document.getElementById('card'+1);
    card.querySelector('img').setAttribute("src", 'assets/img/shop_01.jpg');
    card.querySelector('.h3').textContent='perfume'
    card.querySelector('p').textContent='50EUR'
    card.querySelector('.card-body ul li i').textContent='-Beauty-'
    
}
}


