document.getElementById('name_character').innerHTML = localStorage.getItem('textvalue');

const modal = document.getElementById('modal');
const modalOpen = document.querySelector('.img_character');
const btnClose = document.getElementById('closeBtn')

function openModalWindow() {
    modal.style.display = 'flex';
}

function closeModalWindow() {
    modal.style.display = 'none';
}
modalOpen.onclick = openModalWindow;

window.onclick = function (e) {
    if (e.target === modal) {
        closeModalWindow();
    }

    // Обработчик закрытия (кнопка)

    btnClose.addEventListener('click', function (e) {
        closeModalWindow();
        e.stopPropagation(); // Предотвращаем всплытие события к modal
    });

};



//
const characterModalImages = document.querySelectorAll('.characterModal');

const characterImage = document.getElementById('current-character');

characterModalImages.forEach(image => {
    image.addEventListener('click', () => {
        const selectedAvatarSrc = image.dataset.src;

        characterImage.src = selectedAvatarSrc;

        characterModalImages.forEach(img => img.classList.remove('selected'));
        image.classList.add('selected');

        localStorage.setItem('currentAvatar', selectedAvatarSrc);
    });
});


// При загрузке страницы восстановить сохраненный аватар
window.addEventListener('load', () => {
    const savedAvatar = localStorage.getItem('currentAvatar');
    const characterModalImages = document.querySelectorAll('.characterModal');

    if (savedAvatar) {
        const characterImage = document.getElementById('current-character');
        characterImage.src = savedAvatar;

        characterModalImages.forEach(img => {
            if (img.dataset.src === savedAvatar) {
                img.classList.add('selected');
            }
        });
    }
});

let wins = document.getElementById('wins');
let loses = document.getElementById('loses');