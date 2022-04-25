


const cards= document.getElementById('cards')
const templateCard= document.getElementById('template-card').content
const fragment= document.createDocumentFragment()


document.addEventListener('DOMContentLoaded',() =>{
    printCardsProduts();
});

function printCardsProduts(){
    products.forEach(item =>{

    //const card = document.getElementById('card' + item.id);

    templateCard.querySelector('img').setAttribute('src', item.img);
    templateCard.querySelector('p').textContent= item.price
    templateCard.querySelector('.card-body ul li i').textContent= item.type
    templateCard.querySelector('h3').textContent= item.name

    const clone= templateCard.cloneNode(true)

    fragment.appendChild(clone)
    
})
cards.appendChild(fragment)


}
