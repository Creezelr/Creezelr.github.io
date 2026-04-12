
const ball = document.getElementById('ball');

window.addEventListener('mousemove', (bruv) => {

  const x = bruv.clientX;
  const y = bruv.clientY;
  

  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
  

  ball.style.transform = 'translate(-50%, -50%)'; 
});
