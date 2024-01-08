// SideBar
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

// SideBar Option DropDown

document.querySelectorAll(".sidebar-option-main").forEach((e) => {
  e.addEventListener("click", () => {
    document.querySelectorAll(".sidebar-option-dropdown").forEach((event) => {
      if (event != e.nextElementSibling) {
        event.classList.remove("sidebar-option-dropdown-active");
      }
    });
    e.nextElementSibling.classList.toggle("sidebar-option-dropdown-active");
    document.querySelectorAll(".sidebar-option-dropdown").forEach((event) => {
      if (event.classList.contains("sidebar-option-dropdown-active")) {
        event.parentElement.querySelector(
          ".sidebar-caret-icon"
        ).style.transform = "rotate(180deg)";
      } else {
        event.parentElement.querySelector(
          ".sidebar-caret-icon"
        ).style.transform = "rotate(0deg)";
      }
    });
  });
});

// Header Profile Dropdown

if (document.querySelector(".header-user-box")) {
  document.querySelector(".header-user-box").addEventListener("click", () => {
    document
      .querySelector(".header-user-box-profile-info")
      .classList.toggle("header-user-box-profile-info-active");
    document.querySelector(".back-transparent-layer").style.display = "block";
  });

  window.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".back-transparent-layer")) {
      document
        .querySelector(".header-user-box-profile-info")
        .classList.remove("header-user-box-profile-info-active");
      document.querySelector(".back-transparent-layer").style.display = "none";
    }
  });
}

// Comment Modal
if (document.querySelector(".comment-modal")) {
  document.querySelectorAll(".document-table-comment").forEach((e) => {
    e.addEventListener("click", () => {
      document.querySelector(".comment-modal").style.display = "block";
      document.querySelector(".back-transparent-layer").style.display = "block";
    });
  });
  document
    .querySelector(".comment-modal-ok-btn")
    .addEventListener("click", () => {
      document.querySelector(".comment-modal").style.display = "none";
      document.querySelector(".back-transparent-layer").style.display = "none";
    });

  window.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".back-transparent-layer")) {
      document.querySelector(".comment-modal").style.display = "none";
    }
  });
}

// Forwad Doc Modal
if (document.querySelector(".forwad-doc-modal")) {
  document.querySelectorAll(".forwad-doc-btn").forEach((e) => {
    e.addEventListener("click", () => {
      document.querySelector(".forwad-doc-modal").style.display = "block";
      document.querySelector(".back-transparent-layer").style.display = "block";
    });
  });
  document
    .querySelectorAll(".forwad-doc-modal-btns-row button")
    .forEach((e) => {
      e.addEventListener("click", () => {
        document.querySelector(".forwad-doc-modal").style.display = "none";
        document.querySelector(".back-transparent-layer").style.display =
          "none";
      });
    });
  window.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".back-transparent-layer")) {
      document.querySelector(".forwad-doc-modal").style.display = "none";
    }
  });
}

// Create New Folder Modal
if (document.querySelector(".new-folder-modal")) {
  document
    .querySelector(".create-new-folder-btn")
    .addEventListener("click", () => {
      document.querySelector(".new-folder-modal").style.display = "block";
      document.querySelector(".back-transparent-layer").style.display = "block";
    });

  document
    .querySelectorAll(".new-folder-modal-btns-row button")
    .forEach((e) => {
      e.addEventListener("click", () => {
        document.querySelector(".new-folder-modal").style.display = "none";
        document.querySelector(".back-transparent-layer").style.display =
          "none";
      });
    });
  window.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".back-transparent-layer")) {
      document.querySelector(".new-folder-modal").style.display = "none";
      document.querySelector(".back-transparent-layer").style.display = "none";
    }
  });
}

// Other Filters
if (document.querySelector(".right-side-content-inner-filter-dropdown")) {
  document
    .querySelectorAll(".right-side-content-inner-filter-dropdown-clickable")
    .forEach((e) => {
      e.addEventListener("click", () => {
        e.parentElement.querySelector(
          ".right-side-content-inner-filter-dropdown-inner"
        ).style.display = "block";
        document.querySelector(".back-transparent-layer").style.display =
          "block";
      });
    });
  document
    .querySelectorAll(".right-side-content-inner-filter-dropdown-inner-heading")
    .forEach((event) => {
      event.addEventListener("click", () => {
        event.parentElement.style.display = "none";
        document.querySelector(".back-transparent-layer").style.display =
          "none";
      });
    });

  window.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".back-transparent-layer")) {
      document
        .querySelectorAll(".right-side-content-inner-filter-dropdown-inner")
        .forEach((e) => {
          e.style.display = "none";
        });
    }
  });
}

// Hamburg Filter
if (document.querySelector(".right-side-content-inner-filter-hamburg")) {
  document
    .querySelector(".right-side-content-inner-filter-hamburg-line")
    .addEventListener("click", () => {
      document.querySelector(
        ".right-side-content-inner-filter-hamburg-inner"
      ).style.display = "block";
      document.querySelector(".back-transparent-layer").style.display = "block";
    });

  document
    .querySelectorAll(
      ".right-side-content-inner-filter-hamburg-inner-inner-btns button"
    )
    .forEach((e) => {
      e.addEventListener("click", () => {
        document.querySelector(
          ".right-side-content-inner-filter-hamburg-inner"
        ).style.display = "none";
        document.querySelector(".back-transparent-layer").style.display =
          "none";
      });
    });
  document
    .querySelector(".project-choose-column-cross-btn")
    .addEventListener("click", () => {
      document.querySelector(
        ".right-side-content-inner-filter-hamburg-inner"
      ).style.display = "none";
      document.querySelector(".back-transparent-layer").style.display = "none";
    });
  window.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".back-transparent-layer")) {
      document.querySelector(
        ".right-side-content-inner-filter-hamburg-inner"
      ).style.display = "none";
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

if (document.querySelector(".activity-task-inner")) {
  document
    .querySelector(".activity-task-activity-box-btn-add-task")
    .addEventListener("click", (e) => {
      document.querySelector(
        ".add-project-activity-bottom-fields"
      ).style.display = "none";
      document.querySelector(".activity-task-inner").style.display = "block";
      e.target.textContent = "Delete Activity";
    });
}

// Add Task Input checkbox
if (document.getElementById("check-assign-project")) {
  document
    .getElementById("check-assign-project")
    .addEventListener("input", (e) => {
      if (e.target.checked) {
        document.querySelector(
          ".check-assign-project-fields-row"
        ).style.display = "flex";
      } else {
        document.querySelector(
          ".check-assign-project-fields-row"
        ).style.display = "none";
      }
    });
}

// Project List View Hide Deatils
if (document.querySelector(".project-list-card-option-row")) {
  document
    .querySelectorAll(".project-list-card-option-row button")
    .forEach((e) => {
      e.addEventListener("click", (event) => {
        if (event.target.nodeName == "BUTTON") {
          if (
            event.target.parentElement.previousElementSibling.classList.contains(
              "project-list-card-detail-expand"
            )
          ) {
            if (
              event.target.parentElement.previousElementSibling.style.display ==
              "block"
            ) {
              event.target.parentElement.previousElementSibling.style.display =
                "none";
              event.target.innerHTML = `View Details <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.98167 15.1676C8.1145 15.3004 8.29464 15.375 8.48246 15.375C8.67029 15.375 8.85042 15.3004 8.98326 15.1676L12.9903 11.1606C13.058 11.0952 13.1119 11.0171 13.149 10.9306C13.1862 10.8442 13.2057 10.7513 13.2065 10.6572C13.2073 10.5632 13.1894 10.4699 13.1538 10.3829C13.1182 10.2958 13.0656 10.2167 12.9991 10.1502C12.9326 10.0837 12.8535 10.0311 12.7664 9.99549C12.6794 9.95987 12.5861 9.94195 12.4921 9.94276C12.398 9.94358 12.3051 9.96312 12.2186 10.0002C12.1322 10.0374 12.0541 10.0913 11.9887 10.159L9.1908 12.9569L9.1908 3.57644C9.1908 3.38858 9.11617 3.20841 8.98333 3.07557C8.85049 2.94274 8.67033 2.86811 8.48246 2.86811C8.2946 2.86811 8.11444 2.94274 7.9816 3.07557C7.84876 3.20841 7.77413 3.38858 7.77413 3.57644L7.77413 12.9569L4.97621 10.159C4.84262 10.03 4.66369 9.95856 4.47797 9.96017C4.29225 9.96179 4.11459 10.0363 3.98326 10.1676C3.85193 10.2989 3.77743 10.4766 3.77582 10.6623C3.77421 10.848 3.8456 11.027 3.97463 11.1606L7.98167 15.1676Z" fill="white"/>
            </svg>
            `;
            } else {
              event.target.parentElement.previousElementSibling.style.display =
                "block";
              event.target.innerHTML = `Hide Details <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.15065 3.07555C9.01782 2.94276 8.83768 2.86816 8.64986 2.86816C8.46204 2.86816 8.2819 2.94276 8.14907 3.07555L4.14203 7.0826C4.07437 7.14794 4.02041 7.2261 3.98329 7.31252C3.94617 7.39894 3.92663 7.49189 3.92581 7.58594C3.92499 7.67999 3.94291 7.77326 3.97853 7.86031C4.01414 7.94737 4.06674 8.02645 4.13325 8.09296C4.19975 8.15947 4.27884 8.21206 4.36589 8.24768C4.45294 8.28329 4.54622 8.30122 4.64027 8.3004C4.73432 8.29958 4.82727 8.28004 4.91369 8.24292C5.00011 8.2058 5.07827 8.15183 5.14361 8.08418L7.94153 5.28626V14.6667C7.94153 14.8546 8.01615 15.0348 8.14899 15.1676C8.28183 15.3004 8.462 15.3751 8.64986 15.3751C8.83772 15.3751 9.01789 15.3004 9.15073 15.1676C9.28357 15.0348 9.35819 14.8546 9.35819 14.6667V5.28626L12.1561 8.08418C12.2897 8.21321 12.4686 8.2846 12.6544 8.28299C12.8401 8.28138 13.0177 8.20688 13.1491 8.07555C13.2804 7.94422 13.3549 7.76656 13.3565 7.58084C13.3581 7.39512 13.2867 7.21619 13.1577 7.0826L9.15065 3.07555Z" fill="white"/>
            </svg>
            `;
            }
          } else {
            return;
          }
        }
        if (event.target.nodeName == "svg") {
          if (
            event.target.parentElement.parentElement.previousElementSibling.classList.contains(
              "project-list-card-detail-expand"
            )
          ) {
            if (
              event.target.parentElement.parentElement.previousElementSibling
                .style.display == "block"
            ) {
              event.target.parentElement.parentElement.previousElementSibling.style.display =
                "none";
              event.target.parentElement.innerHTML = `View Details <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.98167 15.1676C8.1145 15.3004 8.29464 15.375 8.48246 15.375C8.67029 15.375 8.85042 15.3004 8.98326 15.1676L12.9903 11.1606C13.058 11.0952 13.1119 11.0171 13.149 10.9306C13.1862 10.8442 13.2057 10.7513 13.2065 10.6572C13.2073 10.5632 13.1894 10.4699 13.1538 10.3829C13.1182 10.2958 13.0656 10.2167 12.9991 10.1502C12.9326 10.0837 12.8535 10.0311 12.7664 9.99549C12.6794 9.95987 12.5861 9.94195 12.4921 9.94276C12.398 9.94358 12.3051 9.96312 12.2186 10.0002C12.1322 10.0374 12.0541 10.0913 11.9887 10.159L9.1908 12.9569L9.1908 3.57644C9.1908 3.38858 9.11617 3.20841 8.98333 3.07557C8.85049 2.94274 8.67033 2.86811 8.48246 2.86811C8.2946 2.86811 8.11444 2.94274 7.9816 3.07557C7.84876 3.20841 7.77413 3.38858 7.77413 3.57644L7.77413 12.9569L4.97621 10.159C4.84262 10.03 4.66369 9.95856 4.47797 9.96017C4.29225 9.96179 4.11459 10.0363 3.98326 10.1676C3.85193 10.2989 3.77743 10.4766 3.77582 10.6623C3.77421 10.848 3.8456 11.027 3.97463 11.1606L7.98167 15.1676Z" fill="white"/>
            </svg>
            `;
            } else {
              event.target.parentElement.parentElement.previousElementSibling.style.display =
                "block";
              event.target.parentElement.innerHTML = `Hide Details <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.15065 3.07555C9.01782 2.94276 8.83768 2.86816 8.64986 2.86816C8.46204 2.86816 8.2819 2.94276 8.14907 3.07555L4.14203 7.0826C4.07437 7.14794 4.02041 7.2261 3.98329 7.31252C3.94617 7.39894 3.92663 7.49189 3.92581 7.58594C3.92499 7.67999 3.94291 7.77326 3.97853 7.86031C4.01414 7.94737 4.06674 8.02645 4.13325 8.09296C4.19975 8.15947 4.27884 8.21206 4.36589 8.24768C4.45294 8.28329 4.54622 8.30122 4.64027 8.3004C4.73432 8.29958 4.82727 8.28004 4.91369 8.24292C5.00011 8.2058 5.07827 8.15183 5.14361 8.08418L7.94153 5.28626V14.6667C7.94153 14.8546 8.01615 15.0348 8.14899 15.1676C8.28183 15.3004 8.462 15.3751 8.64986 15.3751C8.83772 15.3751 9.01789 15.3004 9.15073 15.1676C9.28357 15.0348 9.35819 14.8546 9.35819 14.6667V5.28626L12.1561 8.08418C12.2897 8.21321 12.4686 8.2846 12.6544 8.28299C12.8401 8.28138 13.0177 8.20688 13.1491 8.07555C13.2804 7.94422 13.3549 7.76656 13.3565 7.58084C13.3581 7.39512 13.2867 7.21619 13.1577 7.0826L9.15065 3.07555Z" fill="white"/>
            </svg>
            `;
            }
          } else {
            return;
          }
        }
        if (event.target.nodeName == "path") {
          if (
            event.target.parentElement.parentElement.parentElement.previousElementSibling.classList.contains(
              "project-list-card-detail-expand"
            )
          ) {
            if (
              event.target.parentElement.parentElement.parentElement
                .previousElementSibling.style.display == "block"
            ) {
              event.target.parentElement.parentElement.parentElement.previousElementSibling.style.display =
                "none";
              event.target.parentElement.parentElement.innerHTML = `View Details <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.98167 15.1676C8.1145 15.3004 8.29464 15.375 8.48246 15.375C8.67029 15.375 8.85042 15.3004 8.98326 15.1676L12.9903 11.1606C13.058 11.0952 13.1119 11.0171 13.149 10.9306C13.1862 10.8442 13.2057 10.7513 13.2065 10.6572C13.2073 10.5632 13.1894 10.4699 13.1538 10.3829C13.1182 10.2958 13.0656 10.2167 12.9991 10.1502C12.9326 10.0837 12.8535 10.0311 12.7664 9.99549C12.6794 9.95987 12.5861 9.94195 12.4921 9.94276C12.398 9.94358 12.3051 9.96312 12.2186 10.0002C12.1322 10.0374 12.0541 10.0913 11.9887 10.159L9.1908 12.9569L9.1908 3.57644C9.1908 3.38858 9.11617 3.20841 8.98333 3.07557C8.85049 2.94274 8.67033 2.86811 8.48246 2.86811C8.2946 2.86811 8.11444 2.94274 7.9816 3.07557C7.84876 3.20841 7.77413 3.38858 7.77413 3.57644L7.77413 12.9569L4.97621 10.159C4.84262 10.03 4.66369 9.95856 4.47797 9.96017C4.29225 9.96179 4.11459 10.0363 3.98326 10.1676C3.85193 10.2989 3.77743 10.4766 3.77582 10.6623C3.77421 10.848 3.8456 11.027 3.97463 11.1606L7.98167 15.1676Z" fill="white"/>
            </svg>
            `;
            } else {
              event.target.parentElement.parentElement.parentElement.previousElementSibling.style.display =
                "block";
              event.target.parentElement.parentElement.innerHTML = `Hide Details <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.15065 3.07555C9.01782 2.94276 8.83768 2.86816 8.64986 2.86816C8.46204 2.86816 8.2819 2.94276 8.14907 3.07555L4.14203 7.0826C4.07437 7.14794 4.02041 7.2261 3.98329 7.31252C3.94617 7.39894 3.92663 7.49189 3.92581 7.58594C3.92499 7.67999 3.94291 7.77326 3.97853 7.86031C4.01414 7.94737 4.06674 8.02645 4.13325 8.09296C4.19975 8.15947 4.27884 8.21206 4.36589 8.24768C4.45294 8.28329 4.54622 8.30122 4.64027 8.3004C4.73432 8.29958 4.82727 8.28004 4.91369 8.24292C5.00011 8.2058 5.07827 8.15183 5.14361 8.08418L7.94153 5.28626V14.6667C7.94153 14.8546 8.01615 15.0348 8.14899 15.1676C8.28183 15.3004 8.462 15.3751 8.64986 15.3751C8.83772 15.3751 9.01789 15.3004 9.15073 15.1676C9.28357 15.0348 9.35819 14.8546 9.35819 14.6667V5.28626L12.1561 8.08418C12.2897 8.21321 12.4686 8.2846 12.6544 8.28299C12.8401 8.28138 13.0177 8.20688 13.1491 8.07555C13.2804 7.94422 13.3549 7.76656 13.3565 7.58084C13.3581 7.39512 13.2867 7.21619 13.1577 7.0826L9.15065 3.07555Z" fill="white"/>
            </svg>
            `;
            }
          } else {
            return;
          }
        }
      });
    });
}

// Page Top Back Btn
// if (document.querySelector(".page-top-back-btn")) {
//   document.querySelector(".page-top-back-btn").addEventListener("click", () => {
//     window.history.back();
//   });
// }
// Page End Back Btn
if (document.querySelector(".page-end-back-btn")) {
  document.querySelector(".page-end-back-btn").addEventListener("click", () => {
    window.history.back();
  });
}

// Project Page DropDowns

if (document.querySelector(".project-table")) {
  document.querySelectorAll(".project-page-tr-dropdown").forEach((e) => {
    e.addEventListener("click", (event) => {
      console.log(event.target.parentElement);
      if (
        event.target.parentElement.classList.contains(
          "project-page-tr-dropdown"
        )
      ) {
        event.target.parentElement.classList.toggle(
          "project-page-tr-dropdown-active"
        );
        event.target.parentElement.nextElementSibling.classList.toggle(
          "project-activity-card-active"
        );
      } else {
        return;
      }
    });
  });
}

if (document.querySelector(".add-role-btn-add-project")) {
  document
    .querySelector(".add-role-btn-add-project")
    .addEventListener("click", () => {
      let newRow = document.createElement("div");
      newRow.innerHTML = `<div class="add-task-input-box">
  <p>Member Name <span class="required-star">*</span></p>
  <select name="" id="">
      <option value="">John Doe</option>
      <option value="">John</option>
      <option value="">Doe</option>
      <option value="">Adam</option>
  </select>
</div>
<div class="add-task-input-box">
  <p>Role <span class="required-star">*</span></p>
  <select name="" id="">
      <option value="">Architect</option>
      <option value="">Engineer</option>
      <option value="">Doctor</option>
      <option value="">Software Engineer</option>
  </select>
</div>`;
      newRow.classList.add("add-task-input-box-double");
      document
        .querySelector(".add-role-section")
        .insertBefore(
          newRow,
          document.querySelector(".add-role-btn-add-project-btn-row")
        );
    });
}

// Custom Select Option Dropdown
if (document.querySelector(".select-value-custom-box")) {
  document.querySelectorAll(".select-value-custom-box").forEach((element) => {
    element.querySelector("input").addEventListener("click", () => {
      if (
        element.querySelector(".select-value-custom-box div").style.display ==
        "block"
      ) {
        element.querySelector(".select-value-custom-box div").style.display =
          "none";
      } else {
        element.querySelector(".select-value-custom-box div").style.display =
          "block";
      }
    });
    element.querySelectorAll(".select-value-custom-box div li").forEach((e) => {
      e.addEventListener("click", (event) => {
        event.target.parentElement.parentElement.querySelector("input").value =
          event.target.textContent;
        element.querySelector(".select-value-custom-box div").style.display =
          "none";
      });
    });

    window.addEventListener("click", (e) => {
      console.log(e.target);
      console.log(element.querySelector(".select-value-custom-box div input"));
      console.log(element);
      document
        .querySelectorAll(".select-value-custom-box")
        .forEach((element) => {
          if (e.target != element.querySelector("input")) {
            element.querySelector(
              ".select-value-custom-box div"
            ).style.display = "none";
          }
        });
    });
  });
}
