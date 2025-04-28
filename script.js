const beepSound = document.getElementById('beep-sound');
let experience = 0;
let level = 1;

function typeText(text, elementId) {
    const element = document.getElementById(elementId);
    let index = 0;
    element.innerHTML = '';
    const interval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 30);
}

function startAdventure() {
    beepSound.currentTime = 0;
    beepSound.play();
    shakeButton(event.target);

    experience += 50;
    document.getElementById('experience').textContent = `Experience: ${experience} XP`;

    if (experience >= 100 && level == 1) {
        level++;
        alert("Level Up! You are now Level 2 (Junior Developer)!");
        document.getElementById('level').textContent = `Level: 2 (Junior Developer)`;
    }
}

function contactMe() {
    beepSound.currentTime = 0;
    beepSound.play();
    shakeButton(event.target);
    alert("Contact: haipengchan@gmail.com");
}

function shakeButton(button) {
    button.style.transform = 'scale(0.9) rotate(2deg)';
    setTimeout(() => {
        button.style.transform = 'scale(1) rotate(0)';
    }, 200);
}

function toggleWeapons() {
    beepSound.currentTime = 0;
    beepSound.play();
    const list = document.getElementById('weapon-list');
    if (list.style.display === 'none') {
        list.style.display = 'block';
    } else {
        list.style.display = 'none';
    }
}

window.onload = function() {
    typeText("Level: 1 (New Grad)", "level");
    typeText("Experience: 0 XP", "experience");
};

// 切换主题按钮
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('retro-theme');
    document.body.classList.toggle('modern-theme');
    beepSound.currentTime = 0;
    beepSound.play();
});
