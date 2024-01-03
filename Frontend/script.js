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

if (document.querySelector(".right-side-content-inner-filter-hamburg")) {
  document
    .querySelector(".right-side-content-inner-filter-hamburg")
    .addEventListener("click", () => {
      document.querySelector(
        ".right-side-content-inner-filter-hamburg-inner"
      ).style.display = "block";
      document.querySelector(
        ".right-side-content-inner-filter-hamburg-line rect"
      ).style.fill = "#181F26";
      document.querySelector(
        ".right-side-content-inner-filter-hamburg-line g path"
      ).style.fill = "#fff";
    });
}

if (document.querySelector(".right-side-content-inner-filter-hamburg-inner")) {
  // document
  //   .querySelectorAll(
  //     ".right-side-content-inner-filter-hamburg-inner-inner-btns button"
  //   )
  //   .forEach((e) => {
  //     e.addEventListener("click", () => {
  //       console.log("hhh");
  //       console.log(
  //         document.querySelector(
  //           ".right-side-content-inner-filter-hamburg-inner"
  //         ).style.display
  //       );
  //       document.querySelector(
  //         ".right-side-content-inner-filter-hamburg-inner"
  //       ).style.display = "none !important";
  //     });

  document
    .querySelector(
      ".right-side-content-inner-filter-hamburg-inner-inner-btn-close"
    )
    .addEventListener("click", () => {
      console.log("hhh");
      console.log(
        document.querySelector(".right-side-content-inner-filter-hamburg-inner")
      );
      if (
        document.querySelector(".right-side-content-inner-filter-hamburg-inner")
          .style.display == "block"
      ) {
        document.querySelector(
          ".right-side-content-inner-filter-hamburg-inner"
        ).style.display = "none";
      } else {
        document.querySelector(
          ".right-side-content-inner-filter-hamburg-inner"
        ).style.display = "block";
      }
    });
}

if (document.querySelector(".drawing-page-right-side-content-outer-left")) {
  document
    .querySelector(".drawing-page-right-side-content-outer-left-top")
    .addEventListener("click", () => {
      document
        .querySelector(".drawing-page-right-side-content-outer-left ul")
        .classList.toggle("drawing-folder-toggle");
    });
}
