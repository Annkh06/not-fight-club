let btn1 = document.querySelector('.btn');
btn1.addEventListener('click', function saveName() {
    let firstname = document.getElementById('input_start').value;
    localStorage.setItem('textvalue', firstname);
});

