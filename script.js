const menuItems = document.querySelectorAll('.menu-item');
const content = document.getElementById('content');

const sections = {
    about: `<p>Hello! I'm a Full Stack Developer passionate about building clean, efficient, and creative web applications. I enjoy working across the stack, from designing pixel-perfect frontends to building robust backends. I love combining technology with imagination to create memorable experiences!</p>`,
    
    skills: `<p><strong>Frontend:</strong> HTML5, CSS3, JavaScript, React<br><strong>Backend:</strong> Node.js, Express<br><strong>Database:</strong> MongoDB, MySQL<br><strong>Other:</strong> Git, REST APIs, Deployment</p>`,
    
    projects: `<p><strong>Pixel Portfolio</strong> - Retro-style portfolio site.<br><strong>ChatSpace</strong> - Real-time messaging app.<br><strong>ShopEase</strong> - Full-stack e-commerce app.</p>`,
    
    contact: `<p>Email: your@email.com<br>GitHub: github.com/yourusername<br>LinkedIn: linkedin.com/in/yourusername</p>`
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.menu-item.active').classList.remove('active');
        item.classList.add('active');
        const section = item.getAttribute('data-section');
        content.innerHTML = sections[section];
    });
});
