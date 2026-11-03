document.getElementById("close").addEventListener("click", () => {
  window.electronAPI.closeWindow();
});

document.getElementById("minimize").addEventListener("click", () => {
  window.electronAPI.minimizeWindow();
});

document.getElementById("maximize").addEventListener("click", () => {
  window.electronAPI.maximizeWindow();
});