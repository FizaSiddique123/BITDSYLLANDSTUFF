function switchView(view) {
  const routineView = document.querySelector('.routine-view');
  const pdfView = document.querySelector('.pdf-view');
  const buttons = document.querySelectorAll('.view-toggle button');

  if (view === 'routine') {
    routineView.classList.add('active');
    pdfView.classList.remove('active');
    buttons[0].classList.add('active');
    buttons[1].classList.remove('active');
  } else {
    routineView.classList.remove('active');
    pdfView.classList.add('active');
    buttons[0].classList.remove('active');
    buttons[1].classList.add('active');
  }
}

let currentZoom = 1;
const pdfViewer = document.getElementById('pdfViewer');
const pdfContainer = document.getElementById('pdfContainer');

function zoomIn() {
  currentZoom += 0.1;
  applyZoom();
}

function zoomOut() {
  currentZoom = Math.max(0.2, currentZoom - 0.1);
  applyZoom();
}

function fitToScreen() {
  currentZoom = 1;
  applyZoom();
}

function applyZoom() {
  pdfViewer.style.transform = `scale(${currentZoom})`;
  pdfViewer.style.transformOrigin = 'top center';
}

// Pinch-to-zoom for mobile devices
let startX = 0;
let startY = 0;
let initialDistance = 0;

document.getElementById('pdfContainer').addEventListener('touchstart', (e) => {
  if (e.touches.length == 2) {
    initialDistance = getDistance(e.touches[0], e.touches[1]);
    startX = (e.touches[0].pageX + e.touches[1].pageX) / 2;
    startY = (e.touches[0].pageY + e.touches[1].pageY) / 2;
  }
});

document.getElementById('pdfContainer').addEventListener('touchmove', (e) => {
  if (e.touches.length == 2) {
    let newDistance = getDistance(e.touches[0], e.touches[1]);
    let scale = newDistance / initialDistance;

    if (scale > 1) {
      zoomIn();
    } else {
      zoomOut();
    }

    initialDistance = newDistance;
  }
});

function getDistance(touch1, touch2) {
  let x = touch1.pageX - touch2.pageX;
  let y = touch1.pageY - touch2.pageY;
  return Math.sqrt(x * x + y * y);
}