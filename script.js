document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".content-section");
  const toggleButton = document.getElementById("dark-toggle");

  // Section switching
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      const targetId = link.getAttribute("data-section");

      sections.forEach(section => {
        section.classList.add("hidden");
        section.classList.remove("fade-in");
      });

      const target = document.getElementById(targetId);
      if (target) {
        target.classList.remove("hidden");
        target.classList.add("fade-in");
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Dark/light mode toggle
  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    toggleButton.textContent = isDark ? "☀️" : "🌓";
  });
});

// Track resume download
function trackResumeDownload() {
  console.log("Resume downloaded by a visitor!");
}
