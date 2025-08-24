let nameFight = document.getElementById('name_character').innerHTML = localStorage.getItem('textvalue');
document.getElementById('current-character').innerHTML = localStorage.getItem('currentAvatar');

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

const attackButton = document.getElementById('attackButton');
const attackResultDiv = document.getElementById('attack_result');
const defenceCheckboxes = document.querySelectorAll('input[name="defenceZone"]');
const attackRadios = document.querySelectorAll('input[name="attackZone"]');
let selectedAttackZone = null;
let selectedDefenceZone = [];

function updateAttackButtonState() {
    if (selectedAttackZone && selectedDefenceZone.length === 2) {
        attackButton.disabled = false;
    }
}

attackRadios.forEach(radio => {
    radio.addEventListener('change', () => {
        selectedAttackZone = radio.value;
        updateAttackButtonState();
    });
});

defenceCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            if (selectedDefenceZone.length < 2) {
                selectedDefenceZone.push(checkbox.value);
            } else {
                checkbox.checked = false;
            }
        } else {
            selectedDefenceZone = selectedDefenceZone.filter(zone => zone !== checkbox.value);
        }
        if (selectedDefenceZone.length > 2) {
            selectedDefenceZone.length = 2;
        }
        updateAttackButtonState();
    });
});

attackButton.addEventListener('click', () => {
    const resultText = `${nameFight} attacked Metal Gear to ${selectedAttackZone}, protecting from ${selectedDefenceZone.join(', ')}.`;
    attackResultDiv.textContent = resultText;
});

updateAttackButtonState();