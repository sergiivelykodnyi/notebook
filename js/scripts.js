function themeToggleHandler() {
  const htmlElement = document.documentElement;
  const theme = htmlElement.getAttribute("theme");
  const themeMap = new Map([
    ["light", "dark"],
    ["dark", "light"],
  ]);
  htmlElement.setAttribute("theme", themeMap.get(theme));
  sessionStorage.setItem("theme", themeMap.get(theme));
}

function getTheme() {
  if (sessionStorage.getItem("theme")) {
    return sessionStorage.getItem("theme");
  }

  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  return mq.matches ? "dark" : "light";
}

const theme = getTheme();
document.documentElement.setAttribute("theme", theme);

const button = document.getElementById("theme-toggle");
button.addEventListener("click", themeToggleHandler);
