//FEM CLICK MODAL
const modalShop = document.getElementById('ModalListShop')
modalShop.addEventListener('click', e => {
    printCartModal();
    e.stopPropagation()
});

function printCartModal() {
    const items = document.getElementById('itemsModal');
    items.innerHTML ='';

    cart.forEach(item => {
        templateCarrito.querySelector('th').textContent = item.id
        templateCarrito.querySelectorAll('td')[0].textContent = item.name
        templateCarrito.querySelectorAll('td')[1].textContent = item.price
        templateCarrito.querySelectorAll('td')[2].textContent = item.quantity
        templateCarrito.querySelector('span').textContent = item.subtotal
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })
    itemsModal.appendChild(fragment)

    // printem el total

    const footer = document.querySelector('#totalCarrito');
    footer.textContent = "EUR" + calculateTotal();
    //footer.appendChild();
}