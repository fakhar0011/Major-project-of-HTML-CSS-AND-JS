window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

///show FAQs hidden////

const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    const icon = document.querySelector(".faq_iocn i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-light fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

////// SHOW HIDE NAV MENUN ///////////

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

////// CLOSE NAV MENUN ///////////

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
});
  
