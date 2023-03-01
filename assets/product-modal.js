if (!customElements.get('product-modal')) {
  customElements.define('product-modal', class ProductModal extends ModalDialog {
    constructor() {
      super();
    }

    hide() {
      super.hide();
    }

    show(opener) {
      if (window.innerWidth > 750) {
        super.show(opener);
        const currentMediaId = opener.getAttribute('data-media-id');

        document.querySelector(`.product-media-modal__content[data-current-media="true"]`).querySelectorAll('.product-media-modal-img').forEach((img, index)=>{
          if (img.getAttribute('data-media-id') == currentMediaId) {
            document.querySelector(`.product-media-modal__content[data-current-media="true"]`).querySelector(`.swiper-pagination-bullet:nth-of-type(${index+1})`).click();
          }
        });
      }      
    }
  });

  document.querySelectorAll('.product-media-modal__content').forEach((modal, index)=>{
    var swiper = new Swiper(`.product-media-modal__swiper--${index}`, {
      slidesPerView: 1,
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation : {
          nextEl : ".swiper-button-next",
          prevEl : ".swiper-button-prev",
      }
    });
  });
}
