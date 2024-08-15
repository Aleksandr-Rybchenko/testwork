// Открытие поп-апа
document.querySelector(".btn-blu").addEventListener("click", function () {
  document.getElementById("popup").style.display = "flex";
});

document.querySelector(".pop").addEventListener("click", function () {
  document.getElementById("popup").style.display = "flex";
});

// Закрытие по клику на крестик
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

// Закрытие по клику вне поп-апа
window.addEventListener("click", function (event) {
  if (event.target === document.getElementById("popup")) {
    document.getElementById("popup").style.display = "none";
  }
});

// Открытие и закрытие бургер-меню
document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("show");
});

// скролл хедера
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    // Порог скролла (50px)
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// slayder
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 4, // Отображаем 4 слайда одновременно
  spaceBetween: 30, // Расстояние между слайдами
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // Настройки для мобильных устройств
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});
