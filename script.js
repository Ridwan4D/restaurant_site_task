new Swiper('.card-swiper', {
    loop: true,

    // If we need pagination bullets
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    ,
    breakpoints:{
        0:{
            slidesPreview: 1
        },
        768:{
            slidesPreview: 2
        },
        1024:{
            slidesPreview: 3
        },
    }
});