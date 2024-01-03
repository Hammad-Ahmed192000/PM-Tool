if (document.querySelector(".hamburg-lines")) {
  document.querySelector(".hamburg-lines").addEventListener("click", () => {
    document.querySelector(".sidebar").style.left = "0";
  });
  document
    .querySelector(".sidebar-cross-icon")
    .addEventListener("click", () => {
      document.querySelector(".sidebar").style.left = "-100%";
    });
}
