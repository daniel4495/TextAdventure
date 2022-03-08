
//Buscamos los elementos y creamos la funcion para cambiar el color del fondo
const elementBtnLightmode = document.getElementById('btnLightmode');
elementBtnLightmode.addEventListener('click', lightMode);

const elementBtnDarkmode = document.getElementById('btnDarkmode');
elementBtnDarkmode.addEventListener('click', darkMode);

const elementBtnBeigemode = document.getElementById('btnBeigemode');
elementBtnBeigemode.addEventListener('click', beigeMode);

const elementBtnBisquemode = document.getElementById('btnBisquemode');
elementBtnBisquemode.addEventListener('click', bisqueMode);

function darkMode() {
    let element = document.body;
    element.className = 'dark-mode';
}

function lightMode() {
    let element = document.body;
    element.className = 'light-mode';
}

function beigeMode() {
    let element = document.body;
    element.className = 'beige-mode';
}

function bisqueMode() {
    let element = document.body;
    element.className = 'bisque-mode';
}