const toggle = document.getElementById("themeToggle");
const root = document.documentElement;
const icon = document.querySelector(".theme-icon");

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  root.classList.add("light");
  icon.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  root.classList.toggle("light");
  const isLight = root.classList.contains("light");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  icon.textContent = isLight ? "☀️" : "🌙";
});
