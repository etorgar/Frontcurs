//Modificamos la primera card de index.html con Javascript


const card = document.getElementById('card1');

const firstCard = function firstCard(){
    card.querySelector('img').setAttribute("src", 'assets/img/shop_01.jpg');
    card.querySelector('.h3').textContent='perfume'
    card.querySelector('p').textContent='50EUR'
    card.querySelector('.card-body ul li i').textContent='-Beauty-'
    
}
document.addEventListener('DOMContentLoaded',() =>{
    firstCard();
});
