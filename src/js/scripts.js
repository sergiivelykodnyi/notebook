function themeToggleHandler() {
  const htmlElement = document.documentElement;
  const theme = htmlElement.getAttribute("theme");
  const themeMap = new Map([
    ["light", "dark"],
    ["dark", "sepia"],
    ["sepia", "light"]
  ]);
  htmlElement.setAttribute("theme", themeMap.get(theme));
}

const mq = window.matchMedia("(prefers-color-scheme: dark)");
const theme = mq.matches ? "dark" : "light";
document.documentElement.setAttribute("theme", theme);

const button = document.getElementById("theme-toggle");
button.addEventListener("click", themeToggleHandler);
