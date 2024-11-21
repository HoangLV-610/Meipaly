$(document).ready(function () {
  // Slick Carousel Service
  $(".wrap-list-service").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true, // Bật tính năng autoplay
    autoplaySpeed: 4000,
    speed: 1000, // Thời gian chuyển slide (3000ms = 3 giây)
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1023.98,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // Fancybox
  Fancybox.bind("[data-fancybox='gallery']", {});

  $(".blog-icons a").on("click", function (e) {
    e.preventDefault(); // Ngăn chặn điều hướng đến liên kết
  });

  // Khi nhấn backToTop
  window.addEventListener("scroll", function () {
    // lấy chiều cao của banner
    let banner = this.document.querySelector(".section-banner").offsetHeight;
    let btnBackToTop = this.document.querySelector(".wrap-back-to-top");

    // nếu scroll quá 300px thì hiển thị nút backToTop
    if (this.window.scrollY > banner) {
      btnBackToTop.style.display = "block";
    } else {
      btnBackToTop.style.display = "none";
    }

    btnBackToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Cuộn mượt
      });
    });
  });

  // Hiển thị icon menu
  let wrapMenu = document.querySelector(".wrap-menu");
  let wrapToggleMenu = document.querySelector(".menu-toggle");

  // nút tắt menu
  let btnClose = document.querySelector(".btn-close");

  wrapToggleMenu.addEventListener("click", function () {
    wrapMenu.classList.toggle("active");
  });

  btnClose.addEventListener("click", function () {
    setTimeout(() => {
      wrapMenu.classList.toggle("active");
    }, 10);
  });

  // Count up
  $(".counter").countUp({
    time: 2000,
    delay: 10,
  });
});
