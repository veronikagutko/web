const openIncome = document.getElementById('pop_up_open-income');
const closeIncome = document.getElementById('pop_up_close-income');
const popUp = document.getElementById('pop_up');

const onepRegis = document.getElementById('pop_up_regis');
const closeRegis = document.getElementById('pop_up_close-reg');
const popUpRegis = document.getElementById('pop_up-reg');

const openIncomeFrom = document.getElementById('pop_up_intome-from-reg');

const hamburger = document.querySelector('.hamburger');
const menu__list = document.querySelector('.menu__list');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active');
    menu__list.classList.toggle('active');
})

openIncome.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
});

closeIncome.addEventListener('click', ()=>{
    popUp.classList.remove('active');
});

onepRegis.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.remove('active');
    popUpRegis.classList.add('active');
});

closeRegis.addEventListener('click', ()=>{
    popUpRegis.classList.remove('active');
});

openIncomeFrom.addEventListener('click', function(e){
    e.preventDefault();
    popUpRegis.classList.remove('active');
    popUp.classList.add('active');
});