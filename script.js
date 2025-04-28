const menuItems = document.querySelectorAll('.menu-item');
const content = document.getElementById('content');

const sections = {
    about: `<h2>About Me</h2><p>Hello! I'm a recent Computer Science graduate passionate about frontend development. I love creating interactive and user-friendly web experiences!</p>`,
    
    skills: `<h2>Skills</h2><ul><li>HTML5 / CSS3 / JavaScript</li><li>React / Next.js / TailwindCSS</li><li>Responsive Design</li><li>Git / GitHub</li></ul>`,
    
    projects: `<h2>Projects</h2><ul><li><strong>Portfolio Website:</strong> A personal website to showcase my skills.</li><li><strong>Todo List App:</strong> Built with React.</li><li><strong>Weather Dashboard:</strong> Fetches real-time weather data via API.</li></ul>`,
    
    contact: `<h2>Contact</h2><p>Email: johndoe@example.com</p><p>GitHub: <a href="https://github.com/johndoe" target="_blank">github.com/johndoe</a></p><p>LinkedIn: <a href="https://linkedin.com/in/johndoe" target="_blank">linkedin.com/in/johndoe</a></p>`
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.menu-item.active').classList.remove('active');
        item.classList.add('active');
        const section = item.getAttribute('data-section');
        content.innerHTML = sections[section];
    });
});
