const menuItems = document.querySelectorAll('.menu-item');
const content = document.getElementById('content');
const beepSound = document.getElementById('beep-sound');

const sections = {
    about: '',
    skills: `<h2>Skills</h2><ul><li>HTML5 / CSS3 / JavaScript</li><li>React / Next.js / TailwindCSS</li><li>Responsive Design</li><li>Git / GitHub</li></ul>`,
    projects: `<h2>Projects</h2><ul><li><strong>Portfolio Website:</strong> A responsive personal website using HTML/CSS/JS.</li><li><strong>Todo List App:</strong> Built with React.</li><li><strong>Weather Dashboard:</strong> Fetches weather data via API.</li></ul>`,
    contact: `<h2>Contact</h2><p>Email: johndoe@example.com</p><p>GitHub: <a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a></p><p>LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a></p>`
};

// 开机动画
window.onload = function() {
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
        document.getElementById('main-screen').style.display = 'block';
        typeText('Hello! I am a Frontend Developer passionate about building interactive web experiences.', document.getElementById('content'));
    }, 2000);
};

// 打字机动画
function typeText(text, element) {
    let index = 0;
    element.innerHTML = '';
    const interval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text[index];
            index++;
        } else {
            clearInterval(interval);
        }
    }, 50);
}

// 菜单点击切换
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.menu-item.active').classList.remove('active');
        item.classList.add('active');
        beepSound.currentTime = 0;
        beepSound.play();
        const section = item.getAttribute('data-section');

        if (section === 'about') {
            typeText('Hello! I am a Frontend Developer passionate about building interactive web experiences.', content);
        } else {
            content.innerHTML = sections[section];
        }
    });
});
