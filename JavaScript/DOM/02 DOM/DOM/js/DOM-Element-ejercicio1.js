const nav= document.querySelector('navegacion');
nav.addEventListener('mouseenter', cambioFondo);
function cambioFondo(){
  console.log('entrando a navegacion')
  nav.style.backgroundColor='white';
}