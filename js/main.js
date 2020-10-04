const back = document.querySelector('.back'); // тёмный фон
const buttonPopup = document.querySelector('.popup'); // кнопка, открывающая окно
const closePopup = document.querySelector('.close-modal'); // крестик, закрывающий окно


buttonPopup.addEventListener('click', function() {
    back.style.display = 'block';
})

closePopup.addEventListener('click', function() {
    back.style.display = 'none';
})