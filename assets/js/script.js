document.getElementById("toggleDarkMode").addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-mode");

  const linkedin = document.getElementById("linkedin");
  const github = document.getElementById("github");

  linkedin.classList.add("fade-out");
  github.classList.add("fade-out");

  setTimeout(() => {
    linkedin.src = isDark
      ? "assets/images/linkedinwhite.png"
      : "assets/images/linkedinblack.png";
    github.src = isDark
      ? "assets/images/githubwhite.png"
      : "assets/images/githubblack.png";

    linkedin.classList.remove("fade-out");
    github.classList.remove("fade-out");
  }, 400);
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message!");
});

function downloadCV() {
  alert("Your CV download will start (simulate)!");
}
