// youtube.js

console.log("YouTube Channels page loaded.");

// Optional enhancement: Highlight links on hover
document.querySelectorAll(".youtube-link").forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.color = "red";
  });
  link.addEventListener("mouseout", () => {
    link.style.color = "white";
  });
});
