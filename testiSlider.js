document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper('.testimonial-swiper', {
        slidesPerView: 3,       // Display 3 slides at once
        spaceBetween: 20,       // Space between slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Continue autoplay after user interaction
        },
        breakpoints: {
            768: {
                slidesPerView: 1, // On smaller screens, display only 1 slide
                spaceBetween: 10
            },
            1024: {
                slidesPerView: 3, // On medium screens, display 3 slides
                spaceBetween: 30
            }
        }
    });
});
