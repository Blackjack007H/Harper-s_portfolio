const beepSound = document.getElementById('beep-sound');
const expFill = document.getElementById('exp-fill');

// 切换不同模块内容
function showSection(section) {
  beepSound.currentTime = 0;
  beepSound.play();
  const area = document.getElementById('content-area');

  if (section === 'backpack') {
    area.innerHTML = `
      <h2>Backpack - Skills</h2>
      <ul>
        <li>Python</li>
        <li>SQL</li>
        <li>Flask</li>
        <li>TensorFlow</li>
        <li>React</li>
      </ul>`;
  } else if (section === 'warehouse') {
    area.innerHTML = `
      <h2>Warehouse - Stored Projects</h2>
      <ul>
        <li>Portfolio Website (HTML/CSS/JS)</li>
        <li>Sentiment Analysis (BERT Model)</li>
      </ul>`;
  } else if (section === 'skilltree') {
    area.innerHTML = `
      <h2>Skill Tree</h2>
      <ul>
        <li>Frontend Basics</li>
        <li>Backend APIs</li>
        <li>Machine Learning</li>
      </ul>`;
  } else if (section === 'questlog') {
    area.innerHTML = `
      <h2>Quest Log</h2>
      <ul>
        <li>Master Next.js</li>
        <li>Contribute to Open Source</li>
      </ul>`;
  } else if (section === 'settings') {
    area.innerHTML = `
      <h2>Settings</h2>
      <p>Coming soon...</p>`;
  }
}

// 切换像素风 / 现代风
const toggleButton = document.getElementById('theme-toggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('retro-theme');
  document.body.classList.toggle('modern-theme');
  beepSound.currentTime = 0;
  beepSound.play();
});

// 页面载入时增加经验条动画
window.onload = function() {
  let expProgress = 0;
  const interval = setInterval(() => {
    if (expProgress >= 40) { // 初始经验40%
      clearInterval(interval);
    } else {
      expProgress += 2;
      expFill.style.width = expProgress + '%';
    }
  }, 100);
}
