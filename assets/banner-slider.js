var swiperIngredients = new Swiper('.banner-swiper', {
    direction: 'horizontal',
    loop: false,
    //autoplay: 6500,
    autoplayDisableOnInteraction: false,
    pagination: {
        el: '.banner-swiper-pagination',
        clickable: true
    }
});