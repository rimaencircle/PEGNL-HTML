

// Hero Banner Slider
$(document).ready(function () {

    $(document).foundation();

    
    /*Sticky Header*/
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.stiky-header').addClass('is-sticky');
        } else {
            $('.stiky-header').removeClass('is-sticky');
        }
    });
    /*Sticky Header*/

    // $('li.menu-item').click(function () {
    //     $('li.menu-item').not(this).children('.sub-menu').removeClass('open');
    //     $(this).children('.sub-menu').toggleClass('open');
    // });

    $('.menu-item > a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('open').find('> ul ').slideToggle();
        $(this).parent().siblings().find('> ul').slideUp();
        $(this).parent().siblings().removeClass('open');
    });

    $(".menu-icon").click(function(){
        $("#responsive-menu").toggleClass('open');
        $('body').toggleClass('overflow-hidden');
    });
    
    var homeSwiper = new Swiper(".homeSwiper", { 
        loop: true,
        normalizeSlideIndex:true,
        navigation: {
            nextEl: ".homeSwiper .swiper-button-next",
            prevEl: ".homeSwiper .swiper-button-prev",
        },
        onAny(eventName, ...args) {
            $(".homeSwiper .swiper-button-prev").html(`<span>0${args[0].realIndex + 1}</span><span class='slider-title'>${args[0].realIndex + 1}</span>`);
            $(".homeSwiper .swiper-button-next").html(`<span>0${parseInt($('.homeSwiper .swiper-slide-next').attr("data-swiper-slide-index"), 10) + 1}</span><span class='slider-title'>${args[0].realIndex + 1}</span>`);
        }
    });
    console.log(homeSwiper);
    var anouncementSwiper = new Swiper(".anouncementSwiper", { 
        slidesPerView: 2,
        spaceBetween: 90,
        navigation: {
            nextEl: ".card-navigaiton .card-next",
            prevEl: ".card-navigaiton .card-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1399: {
                spaceBetween: 90, 
            },
            1699: {
                slidesPerView: 3,
                spaceBetween: 90,
            }
        },
    });

    var eventSwiper = new Swiper(".eventSwiper", { 
        slidesPerView: 2,
        spaceBetween: 90,
        navigation: {
            nextEl: ".card-navigaiton .event-next",
            prevEl: ".card-navigaiton .event-prev",
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1399: {
                spaceBetween: 90, 
            },
            1699: {
                slidesPerView: 3,
                spaceBetween: 90,
            }
        },
    });

    var swiper = new Swiper(".careerSwiper", {
        slidesPerView: 3,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            767: {
                slidesPerView: 2,
            }, 
            1299: {
                slidesPerView: 3,
            }
        },
    });
    
    var jobSwiper = new Swiper(".jobSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        grid: {
            rows: 2,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            0: {
              slidesPerView: 1,
            },
            991: {
                slidesPerView: 2,
            },
            1299: {
                slidesPerView: 3,
            }
        },
    });
    
    /*Dropdown Menu*/
    $('.pn-select').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.pn-select-option').slideToggle(300);
    });
    $('.pn-select').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.pn-select-option').slideUp(300);
    });
    $('.pn-select .pn-select-option li').click(function () {
        $(this).parents('.pn-select').find('.selected-item').text($(this).text());
        $(this).parents('.pn-select').find('input').attr('value', $(this).attr('id'));
    });
    /*End Dropdown Menu*/


    $('.pn-select-option li').click(function () {
    var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
    msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
    });
    
    const burger = document.querySelector('.humburgur');
    const navbar = document.querySelector('.humburgur-menu');
    const navLink = document.querySelectorAll('.humburgur-menu .nav-link');
    const closeBurgur = document.querySelector('.close-humburgur');
    const body = document.querySelector('body');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('nav-open');
        burger.classList.toggle('burger-open');
        body.classList.toggle('overflow-hidden');
    });
    closeBurgur.addEventListener('click', () => {
        navbar.classList.toggle('nav-open');
        burger.classList.toggle('burger-open');
        body.classList.toggle('overflow-hidden');
    });
    // const cursor = document.querySelector('#cursor');
    // let mouse = { x: 400, y: 400 };
    // let pos = { x: 0, y: 0 };
    // const speed = 0.2; // between 0 and 1

    // const updatePosition = () => {
    // pos.x += (mouse.x - pos.x) * speed;
    // pos.y += (mouse.y - pos.y) * speed;
    // cursor.style.transform = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';
    // };

    // const updateCoordinates = e => {
    // mouse.x = e.clientX;
    // mouse.y = e.clientY;
    // }

    // window.addEventListener('mousemove', updateCoordinates);

    // function loop() {
    // updatePosition();
    // requestAnimationFrame(loop);
    // }

    // requestAnimationFrame(loop);
    // $("* a").hover(function(){
    //     $('#cursor .cursor--inner').css({ 'transform': 'scale(2)'});
    //     $('#cursor').css({ 'mix-blend-mode': 'difference'});
    // })
    // $("a").mouseleave(function () {
    //     $('#cursor .cursor--inner').css({ 'transform': 'scale(1)' });
    //     $('#cursor').css({ 'mix-blend-mode': 'unset'});
    // });
    // $(".footer-menu").hover(function(){
    //     $('#cursor .cursor--inner').css({ 'background-color': '#fff'});
    //     $('#cursor').css({ 'mix-blend-mode': 'difference'});
    // })
    // $(".footer-menu").mouseleave(function () {
    //     $('#cursor .cursor--inner').css({ 'background-color': '#048982' });
    //   });

});

