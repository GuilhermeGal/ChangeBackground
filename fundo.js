alert("SEJA BEM VINDO A UM DOS MEUS PROJETOS DE JAVASCRIPT. ESTE É UM SITE ONDE VOCÊ PODE ALTERA O FUNDO.")

const container = document.querySelector('.container');
const color = document.querySelector('input')

const defaultColor = '#fff';
container.style.backgroundColor = `${defaultColor}`;

function onChangeBg(){
	container.style.backgroundColor = `${color.value}`;
}