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
  Fancybox.bind("[data-fancybox='gallery']", {
    Toolbar: {
      display: ["zoom", "close"], // Không cần thêm prev/next ở đây vì chúng là của Carousel
    },
    Thumbs: {
      autoStart: true,
    },
    infinite: true,
    Carousel: {
      // Tùy chỉnh nút Previous và Next
      Navigation: {
        prevTpl: `
        <button title="Previous" class="carousel__button is-prev" tabindex="0">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
            <path id="XMLID_28_" d="M315,150H51.213l49.393-49.394c5.858-5.857,5.858-15.355,0-21.213c-5.857-5.857-15.355-5.857-21.213,0
            l-75,75c-5.858,5.857-5.858,15.355,0,21.213l75,75C82.323,253.535,86.161,255,90,255c3.839,0,7.678-1.465,10.606-4.394
            c5.858-5.857,5.858-15.355,0-21.213L51.213,180H315c8.284,0,15-6.716,15-15S323.284,150,315,150z"/>
          </svg>
        </button>`,
        nextTpl: `
          <button title="Next" class="carousel__button is-next" tabindex="0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1">
              <path d="M9 3l9 9-9 9"></path>
            </svg>
          </button>`,
      },
    },
  });

  $(".blog-icons a").on("click", function (e) {
    e.preventDefault(); // Ngăn chặn điều hướng đến liên kết
  });

  // // Chạy số
  // $(".number-counter").counterUp({
  //   delay: 10, // thời gian giữa mỗi bước
  //   time: 2000, // thời gian tổng cộng (milisecond)
  // });

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
});
