const pyqsData = [
  {
    name: "BIT MESRA PYQ's Link..",
    description: "Access previous year question papers to prepare effectively for exams. Download PDFs for practice and better understanding of exam patterns.",
    icon: "fas fa-question-circle",
    link: "https://bitmesra.ac.in/Other-Department-Pages/content/1/258/361"
  }
];

const container = document.getElementById("pyqs-container");

pyqsData.forEach(pyqs => {
  const card = document.createElement("div");
  card.className = "pyqs-card";

  card.innerHTML = `
    <i class="${pyqs.icon} pyqs-icon"></i>
    <h3>${pyqs.name}</h3>
    <p>${pyqs.description}</p>
    <a href="${pyqs.link}" class="pyqs-btn" target="_blank" rel="noopener noreferrer">Learn More</a>
  `;

  container.appendChild(card);
});

