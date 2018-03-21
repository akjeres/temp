

jQuery(document).ready(function(){
    
    // Initialize swiper
    sliderEfect = jQuery('.sliderJGD').attr('data');
    if(sliderEfect == ''){
        sliderEfect = 'fade';
    }
    slKeyBoard = jQuery('.sliderJGD').attr('data-right');
    if(slKeyBoard == '1' || slKeyBoard == 1){
        slKeyBoard = true;
    } else {
        slKeyBoard = false;
    }
    spaceBetween = jQuery('.sliderJGD').attr('data-spaceBetween');
    if(spaceBetween != '' || spaceBetween != '0' || spaceBetween != 0){
        spaceBetween = parseFloat(spaceBetween);
    } else {
        spaceBetween = spaceBetween;
    }
    var swiperJoomGalDnage = new Swiper('.swiperImg', {
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: spaceBetween,
        loop: true,
        grabCursor: true,
        keyboardControl: slKeyBoard,
        centeredSlides: true,
        effect: sliderEfect, //'fade',
        //effect: 'coverflow',
        //slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        },
        cube: {
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94
        },
        autoplay: 2000,
        pagination: '.swiper-pagination-slider',
        paginationClickable: true
    });
    
    // go slider
    jQuery('.colGalleryImage .imageJGD').on('click', function(){
        console.log('click image');
        jQuery('.sliderJGD').show();
        swiperJoomGalDnage.activeIndex = parseFloat(jQuery(this).attr('data')) + 1;
        swiperJoomGalDnage.update(true);
    });
    
    // close slider
    jQuery('.buttonCloseSlider').on('click', function(){
        jQuery('.sliderJGD').hide();
    });
    
});