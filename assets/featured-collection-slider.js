var swiperIngredients = new Swiper('.featured-collection .contains-card--product', {
    slidesPerView: 2,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        750: {
          slidesPerView: 3
        }
    }
});