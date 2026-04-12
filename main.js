
const ball = document.getElementById('ball');

window.addEventListener('mousemove', (e) => {

  const x = e.clientX;
  const y = e.clientY;
  

  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
  

  ball.style.transform = 'translate(-50%, -50%)'; 
});
