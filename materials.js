const materials = [
  {
    name: 'Chemistry',
    icon: 'fas fa-vial',
    description: 'Chemistry materials including Theory and Practical',
    theoryFile: 'files/chem-theory.pdf',
    practicalFile: 'files/chem-practical.pdf',
  },
  {
    name: 'BME',
    icon: 'fas fa-hammer',
    description: 'BME materials including Theory and Practical',
    theoryFile: 'files/bme-theory.pdf',
    practicalFile: 'files/bme-practical.pdf',
  },
  {
    name: 'EVS',
    icon: 'fas fa-leaf',
    description: 'EVS materials including Theory and Practical',
    theoryFile: 'files/evs-theory.pdf',
    practicalFile: 'files/evs-practical.pdf',
  },
  {
    name: 'BEC',
    icon: 'fas fa-microchip',
    description: 'BEC materials including Theory and Practical',
    theoryFile: 'files/physics-theory.pdf',
    practicalFile: 'files/Bec lab copy.pdf',
  },
  {
    name: 'Physics',
    icon: 'fas fa-atom',
    description: 'Physics materials including Theory and Practical',
    theoryFile: 'files/chem-theory.pdf',
    practicalFile: 'files/chem-practical.pdf',
  },
  {
    name: 'Bio',
    icon: 'fas fa-dna',
    description: 'Biology materials including Theory and Practical',
    theoryFile: 'files/bme-theory.pdf',
    practicalFile: 'files/bme-practical.pdf',
  },
  {
    name: 'PPS',
    icon: 'fas fa-laptop',
    description: 'PPS materials including Theory and Practical',
    theoryFile: 'files/evs-theory.pdf',
    practicalFile: 'files/evs-practical.pdf',
  },
  {
    name: 'Mathematics:1',
    icon: 'fas fa-calculator',
    description: 'Mathematics 1 materials including Theory and Practical',
    theoryFile: 'files/physics-theory.pdf',
    practicalFile: 'files/pps.pdf',
  },
  {
    name: 'Mathematics:2',
    icon: 'fas fa-divide',
    description: 'Mathematics 2 materials including Theory and Practical',
    theoryFile: 'files/evs-theory.pdf',
    practicalFile: 'files/evs-practical.pdf',
  },
  {
    name: 'BEE',
    icon: 'fas fa-battery-half',
    description: 'BEE materials including Theory and Practical',
    theoryFile: 'files/ravish r singh bee.pdf',
    practicalFile: 'files/Bee practical.pdf',
  },
];

function loadMaterials() {
  const container = document.getElementById('materialsContainer');
  container.innerHTML = '';

  materials.forEach(material => {
    const card = document.createElement('div');
    card.classList.add('material-card');
    card.innerHTML = `
            <i class="${material.icon}"></i>
            <h3>${material.name}</h3>
            <p>${material.description}</p>
            <div class="button-group">
                <button class="btn theory-btn" onclick="openPdfModal('${material.theoryFile}')">
                    <i class="fas fa-book-open"></i> Theory
                </button>
                <button class="btn practical-btn" onclick="openPdfModal('${material.practicalFile}')">
                    <i class="fas fa-tools"></i> Practical
                </button>
            </div>
        `;
    container.appendChild(card);
  });
}

function openPdfModal(pdfUrl) {
  document.getElementById('pdfModal').style.display = 'flex';
  document.getElementById('pdfFrame').src = pdfUrl;
}

function closePdfModal() {
  document.getElementById('pdfModal').style.display = 'none';
  document.getElementById('pdfFrame').src = '';
}

document.addEventListener('DOMContentLoaded', loadMaterials);

document.getElementById('searchInput').addEventListener('input', function (e) {
  const query = e.target.value.toLowerCase();
  const cards = document.querySelectorAll('.material-card');
  cards.forEach(card => {
    const name = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    card.style.display = name.includes(query) || description.includes(query) ? '' : 'none';
  });
});