const container = document.getElementById('testimonialsContainer');
const COLS = 5;
const BOXES = 5;            // unique per column

// your sample data
const data = [ /* …your 30+ items…*/ ];

// ensure we have at least COLS*BOXES entries
while (data.length < COLS * BOXES) {
  data.push({ text:`Placeholder ${data.length+1}`, author:`Author ${data.length+1}`, gender: data.length%2?'female':'male' });
}

const cols = [];
let idx = 0;

function randH() {
  const min = 120, max = 180;
  return Math.floor(Math.random()*(max-min+1))+min;
}

for (let c = 0; c < COLS; c++) {
  const col = document.createElement('div');
  col.className = 'column';
  cols.push(col);
  // pick BOXES unique, then duplicate for seamless loop
  const slice = data.slice(c*BOXES, c*BOXES + BOXES);
  const arr = slice.concat(slice);
  arr.forEach(item => {
    const box = document.createElement('div');
    box.className = 'testimonial-box';
    box.style.height = randH()+'px';
    const icon = item.gender==='female' ? 'ASSETS/female.jpg' : 'ASSETS/man.png';
    box.innerHTML = `
      <p>${item.text}</p>
      <strong><img src="${icon}" class="author-icon">— ${item.author}</strong>
    `;
    // hover interactions
    box.addEventListener('mouseenter', () => {
      col.classList.add('paused');
      box.classList.add('hovered');
      cols.forEach((other, i) => {
        if (i < c) other.classList.add('pushed-left');
        if (i > c) other.classList.add('pushed-right');
      });
    });
    box.addEventListener('mouseleave', () => {
      col.classList.remove('paused');
      box.classList.remove('hovered');
      cols.forEach(o => o.classList.remove('pushed-left','pushed-right'));
    });
    col.appendChild(box);
  });
  container.appendChild(col);
}
