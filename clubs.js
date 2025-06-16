const clubsData = [
  {
    name: "Literary Society (AAKSHAR)",
    description: "Join us in exploring the world of literature and creativity.",
    icon: "fas fa-feather-alt",
    link: "https://www.instagram.com/aakshar_bitm/"
  },
  {
    name: "Institute of Electrical and Electronics Engineers (IEEE)",
    description: "Engage in student-driven projects and open-source contributions.",
    icon: "fas fa-code",
    link: "https://www.instagram.com/ieeebitd/"
  },
  {
    name: "Automobile Society",
    description: "A dynamic student-led society fostering innovation and hands-on experience in automobile design, fabrication, and racing.",
    icon: "fas fa-flag-checkered",
    link: "https://www.instagram.com/automobile.bitd/"
  },
  {
    name: "Robotics Club",
    description: "Dive into AI, automation, and futuristic tech.",
    icon: "fas fa-robot",
    link: "https://www.instagram.com/robotic_society_bitd/"
  },
  {
    name: "Photography Club (PSOC)",
    description: "Capture moments, create memories.",
    icon: "fas fa-camera-retro",
    link: "https://www.instagram.com/bitd.psoc/"
  },
  {
    name: "Drama Club (Abhivyakti)",
    description: "College's vibrant drama club, dedicated to expressing powerful stories through theatre and performance arts.",
    icon: "fas fa-theater-masks",
    link: "https://www.instagram.com/abhivyakti_bitd/"
  },
  {
    name: "Music Club (Swar)",
    description: "Creative hub for passionate musicians to explore, perform and celebrate diverse musical expressions.",
    icon: "fas fa-music",
    link: "https://www.instagram.com/swar.bitd/"
  },
  {
    name: "Dance Society (Nritya)",
    description: "Spirited platform where students express themselves through rhythm, movement, and diverse dance forms.",
    icon: "fas fa-drum",
    link: "https://www.instagram.com/nritya_dsoc_bitd/"
  },
  {
    name: "Institution's Innovation Council",
    description: "Explore. Create. Innovate.",
    icon: "fas fa-lightbulb",
    link: "https://www.instagram.com/iic.bitd/"
  }
];


const container = document.getElementById("clubs-container");

// Create Instagram popup elements
const igPopupOverlay = document.createElement("div");
igPopupOverlay.className = "instagram-popup-overlay";
igPopupOverlay.style.display = "none";

const igPopupCard = document.createElement("div");
igPopupCard.className = "instagram-popup-card";

const igPopupContent = document.createElement("div");
igPopupContent.className = "instagram-popup-content";

const igPopupTitle = document.createElement("h2");

// Create icon element
const instaIcon = document.createElement("i");
instaIcon.className = "fab fa-instagram"; // Font Awesome Instagram icon
instaIcon.style.marginRight = "8px"; // optional spacing

// Append icon and text
igPopupTitle.appendChild(instaIcon);
igPopupTitle.append("Instagram");

const igPopupLink = document.createElement("button");
igPopupLink.className = "instagram-popup-link";
igPopupLink.textContent = "Go to Instagram";

const igPopupClose = document.createElement("span");
igPopupClose.className = "instagram-popup-close";
igPopupClose.innerHTML = "&times;";

// Assemble popup
igPopupContent.appendChild(igPopupClose);
igPopupContent.appendChild(igPopupTitle);
igPopupContent.appendChild(igPopupLink);
igPopupCard.appendChild(igPopupContent);
igPopupOverlay.appendChild(igPopupCard);
document.body.appendChild(igPopupOverlay);

// Popup close functionality
igPopupClose.addEventListener("click", () => {
  igPopupOverlay.style.display = "none";
});

// Open link when "Go to Instagram" is clicked
igPopupLink.addEventListener("click", () => {
  const url = igPopupLink.getAttribute("data-link");
  if (url) {
    window.open(url, "_blank");
  }
});

clubsData.forEach(club => {
  const card = document.createElement("div");
  card.className = "club-card";

  card.innerHTML = `
    <i class="${club.icon} club-icon"></i>
    <h3>${club.name}</h3>
    <p>${club.description}</p>
    <a href="${club.link}" class="club-btn">Learn More</a>
  `;

  container.appendChild(card);

  const learnMoreLink = card.querySelector(".club-btn");

  learnMoreLink.addEventListener("click", (e) => {
    e.preventDefault();
    igPopupOverlay.style.display = "flex";
    igPopupLink.setAttribute("data-link", club.link); // Store current club link
  });
});
