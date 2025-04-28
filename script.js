const beepSound = document.getElementById('beep-sound');
const expFill = document.getElementById('exp-fill');
let exp = 0;

// 打开不同区域
function showSection(section) {
    beepSound.currentTime = 0;
    beepSound.play();
    const area = document.getElementById('content-area');
    if (section === 'backpack') {
        area.innerHTML = "<h2>Skills Backpack</h2><p>Python, SQL, Flask, TensorFlow...</p>";
    } else if (section === 'warehouse') {
        area.innerHTML = "<h2>Warehouse</h2><p>Project Artifacts Stored.</p>";
    } else if (section === 'skill-tree') {
        area.innerHTML = "<h2>Skill Tree</h2><ul><li>Frontend Basics</li><li>Backend APIs</li><li>Machine Learning</li></ul>";
    } else if (section === 'quest-log') {
        area.innerHTML = "<h2>Quest Log</h2><ul><li>Master Next.js</li><li>Contribute Open Source</li></ul>";
    } else if (section === 'settings') {
        area.innerHTML = "<h2>Settings</h2><p>Coming soon...</p>";
    }
}

// 切换像素风和现代风
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('retro-theme');
    document.body.classList.toggle('modern-theme');
    beepSound.currentTime = 0;
    beepSound.play();
});

// 页面载入时，慢慢增加经验值
window.onload = function() {
    let expProgress = 0;
    const interval = setInterval(() => {
        if (expProgress >= 40) { // 40%经验
            clearInterval(interval);
        } else {
            expProgress += 2;
            expFill.style.width = expProgress + '%';
        }
    }, 100);
}
