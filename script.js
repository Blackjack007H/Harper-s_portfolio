const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Load images
const mapImg = new Image();
mapImg.src = 'images/map.png';

const playerImg = new Image();
playerImg.src = 'images/player.png';

const player = {
  x: 500,
  y: 300,
  width: 32,
  height: 32,
  speed: 4
};

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false
};

// Scroll variables
let scrollX = 0;
let scrollY = 0;

// Link areas (simple example: reach X/Y to jump)
const linkZones = [
  {x: 800, y: 500, width: 50, height: 50, url: 'https://github.com/your-link'},
  {x: 1200, y: 400, width: 50, height: 50, url: 'https://linkedin.com/in/your-link'},
  {x: 600, y: 700, width: 50, height: 50, url: 'resume.pdf'}
];

// Handle keys
window.addEventListener('keydown', (e) => {
  if (e.key in keys) {
    keys[e.key] = true;
  }
});

window.addEventListener('keyup', (e) => {
  if (e.key in keys) {
    keys[e.key] = false;
  }
});

// Movement logic
function movePlayer() {
  if (keys.ArrowUp) player.y -= player.speed;
  if (keys.ArrowDown) player.y += player.speed;
  if (keys.ArrowLeft) player.x -= player.speed;
  if (keys.ArrowRight) player.x += player.speed;
}

// Detect if inside a link zone
function checkLinks() {
  linkZones.forEach(zone => {
    if (player.x < zone.x + zone.width &&
        player.x + player.width > zone.x &&
        player.y < zone.y + zone.height &&
        player.y + player.height > zone.y) {
      window.location.href = zone.url;
    }
  });
}

// Draw everything
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  scrollX = player.x - canvas.width / 2;
  scrollY = player.y - canvas.height / 2;

  // Draw map
  ctx.drawImage(mapImg, -scrollX, -scrollY);

  // Draw player
  ctx.drawImage(playerImg, player.x - scrollX, player.y - scrollY, player.width, player.height);

  movePlayer();
  checkLinks();
  
  requestAnimationFrame(gameLoop);
}

// Start after images loaded
mapImg.onload = () => {
  gameLoop();
};
