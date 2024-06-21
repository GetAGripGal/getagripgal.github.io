declare global {
  namespace App {}
}

window.addEventListener("load", () => {
  initConfig();
  console.log("Site configuration initialized");
});

window.addEventListener("keydown", (e) => {
  if (e.key == "escape") {
    window.location.href = "/";
  }
});

export {};
