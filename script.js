const menuItems = document.querySelectorAll('.menu-item');
const content = document.getElementById('content');

const sections = {
    about: "<h2>About Me</h2><p>Hi! I'm a passionate Full Stack Developer who loves coding and building cool projects!</p>",
    skills: "<h2>Skills</h2><p>Frontend: HTML, CSS, JavaScript, React<br>Backend: Node.js, Express<br>Database: MongoDB, SQL</p>",
    projects: "<h2>Projects</h2><p>Portfolio Website, E-commerce App, Chat Application...</p>",
    contact: "<h2>Contact</h2><p>Email: your@email.com<br>GitHub: github.com/yourprofile</p>"
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.menu-item.active').classList.remove('active');
        item.classList.add('active');
        const section = item.getAttribute('data-section');
        content.innerHTML = sections[section];
    });
});
