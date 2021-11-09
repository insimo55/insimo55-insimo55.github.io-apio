"use strict";


// preloader

const preloader = document.querySelector('.preloader'),
    preloaderDot1 = document.querySelector('.preloader__dot_1'),
    preloaderDot2 = document.querySelector('.preloader__dot_2'),
    preloaderDot3 = document.querySelector('.preloader__dot_3');

const dotsAnim = () => {
    let a = 0;
    setInterval(() => {
        if (a < 50) {
            a++;
        } else if (a >= 50 && a < 100) {
            preloaderDot1.style.opacity = "1";
            a++;
        } else if (a >= 100 && a < 150) {
            preloaderDot2.style.opacity = "1";
            a++;
        } else if (a >= 150 && a < 200) {
            preloaderDot3.style.opacity = "1";
            a++;
        } else if (a == 200) {
            a = 0;
            preloaderDot1.style.opacity = "0";
            preloaderDot2.style.opacity = "0";
            preloaderDot3.style.opacity = "0";
        }
    }, 5);
};
dotsAnim();

const fadeSection = function(i) {
    i.removeAttribute('style');
    i.style.opacity = '1';
    window.setTimeout(() => {
        i.style.opacity = '0';
        i.style.overflow = 'hidden';
    }, 2000);
    window.setTimeout(() => {
        i.style.display = 'none';
    }, 2500);
};

window.onload = fadeSection(preloader);


// submit animation
const applicationaccepted = document.querySelector('.applicationaccepted'),
      contactsBtn = document.querySelector('.contacts__btn');

const thanksScreen = function() {
    applicationaccepted.removeAttribute('style');
    applicationaccepted.style.display = 'block';
    window.setTimeout(()=> {
        applicationaccepted.style.opacity = '1';
    }, 500);
    window.setTimeout(() => {
        applicationaccepted.style.opacity = '0';
        applicationaccepted.style.overflow = 'hidden';
    }, 2500);
    window.setTimeout(() => {
        applicationaccepted.style.display = 'none';
    }, 3000);
};


// mobile nav bar

const promoHeader = document.querySelector('.promo__header'),
      promoHumburger = document.querySelector('.promo__header__humburger'),
    navMobile = document.createElement('div');

navMobile.classList.add('promo__header__nav__menu');
navMobile.innerHTML = `
            <div class="promo__header__nav__menu__close">
            <div class="promo__header__humburger__divider promo__header__humburger__divider_1"></div>
            <div class="promo__header__humburger__divider promo__header__humburger__divider_3"></div>
            </div>
            <div class="promo__header__nav__menu__item">
                <a class="promo__link__close" href="#1">Services</a>
                <div class="promo__header__nav__menu__item__circle"></div>
            </div>
            <div class="promo__header__nav__menu__item">
                <a class="promo__link__close" href="#2">About us</a>
                <div class="promo__header__nav__menu__item__circle"></div>
            </div>
            <div class="promo__header__nav__menu__item">
                <a class="promo__link__close" href="#3">Security</a>
                <div class="promo__header__nav__menu__item__circle"></div>
            </div>
            <div class="promo__header__nav__menu__item">
                <a class="promo__link__close" href="#4">Cases</a>
                <div class="promo__header__nav__menu__item__circle"></div>
            </div>
            <div class="promo__header__nav__menu__item">
                <a class="promo__link__close" href="#5">Team</a>
                <div class="promo__header__nav__menu__item__circle"></div>
            </div>
            <div class="promo__header__nav__menu__item">
                <a class="promo__link__close" href="#6">Contacts</a>
                <div class="promo__header__nav__menu__item__circle"></div>
            </div>
`;

promoHeader.append(navMobile);

const toggleClass = function(){
    document.querySelector('.promo__header__nav__menu').classList.toggle('promo__header__nav__menu_active');
    promoHumburger.classList.toggle('promo__header__humburger_active');
    checkActive();
};

const promoClose = document.querySelector('.promo__header__nav__menu__close');

promoHumburger.addEventListener('click', toggleClass);
promoClose.addEventListener('click', toggleClass);

const checkActive = function() {
    if (promoHumburger.classList.contains('promo__header__humburger_active')) {
        document.querySelector('.promo__header__humburger__divider_1').style.cssText = 'transform: rotate(45deg) translateX(10px)';
        document.querySelector('.promo__header__humburger__divider_3').style.cssText = 'transform: rotate(-45deg) translateX(7px)';
    } else {
        document.querySelector('.promo__header__humburger__divider_1').style.cssText = 'display: block';
        document.querySelector('.promo__header__humburger__divider_3').style.cssText = 'display: block';
    }
};
checkActive();


const linkItem = document.querySelectorAll('.promo__link__close');

linkItem.forEach((e)=> {
    e.addEventListener('click', ()=> {
        document.querySelector('.promo__header__nav__menu').classList.toggle('promo__header__nav__menu_active');
    });
});

// slider 
const checkWindows = function() {
    if (window.screen.width <= 1024) {
        const deleteh1 = document.querySelector('#h1');
        const removeItem = function(item) {
            item.parentElement.removeChild(item);
        };
        removeItem(deleteh1);

        $('.services__wrapper').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 500
        });

        $('.cases__wrapper').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 10000,
            speed: 500
        });
    }
};
checkWindows();


// smooth scroll

SmoothScroll({
    animationTime: 600,
    stepSize: 55,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    accelerationDelta: 30,
    accelerationMax: 3,
});




// why security is important (ladder)

const ladderName = document.querySelectorAll('.security__date');
const ladderFunc = () => {
    let i = 0;
    if (window.screen.width <= 1024 && window.screen.width > 726){
        for (i = 0; i < 7; i++) {
            ladderName[i].style.justifyContent = 'flex-start';
            ladderName[i].style.left = '135px';
        }
    } else if (window.screen.width <= 768) {
        for (i = 0; i < 7; i++) {
            ladderName[i].style.justifyContent = 'flex-start';
            ladderName[i].style.left = '45px';
        }
    } else {
        for (i = 0; i < 7; i++) {
            if (i % 2 == 0) {
                ladderName[i].style.justifyContent = 'flex-end';
                ladderName[i].style.left = '110px';
            } else {
                ladderName[i].style.right = '110px';
            }
        }
    }
};
ladderFunc();

// animation fadeinup

new WOW().init();

const animatePage = document.querySelectorAll('.animation');

animatePage.forEach((e) => {
    e.classList.add('wow', 'animate__animated', 'animate__fadeInUp');
    e.setAttribute('data-wow-duration', '2s');
});

// Forms 
$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "telegram.php",
        data: $(this).serialize()
    }).done(function(){
        thanksScreen();
        $('form').trigger('reset');
    });
    return false;
});

// privacy link 


const footerLink = document.querySelector('.footer__privacy');

footerLink.addEventListener('click', (e)=> {
    e.preventDefault();
    window.open('/Data%20Privacy%20Notice.pdf');
});