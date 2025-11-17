// When the user scrolls down, ensure menu stay visible

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        const menu = document.querySelector('.menucontainer');
        menu.classList.add('opaquemenu');
    } else {
        const menu = document.querySelector('.menucontainer');
        menu.classList.remove('opaquemenu');
    }
}

/* Toggle miniature box on click to PORTFOLIO menu item */

let toggleMiniatures = false;
const menuPortfolio = document.getElementById('menuPortfolio');
const boiteMiniatures = document.getElementById('boiteMiniatures')

menuPortfolio.addEventListener('click', () => {
    toggleMiniatures = !toggleMiniatures;
    boiteMiniatures.style.display = toggleMiniatures ? 'block' : 'none';
});

/* Add event for each image in miniature box */

let currentImageIndex = 1;

function updateSlideImage() {
    const slideshowcurrentimg = document.getElementById('slideshowcurrentimg');
    slideshowcurrentimg.src = './assets/img/p' + currentImageIndex.toString() + '.jpg';
}

for (let i = 1; i <= 8; i++) {
    const folio = document.getElementById('folio' + i.toString());
    folio.addEventListener('click', () => {
        const slideshow = document.querySelector('.slideshow');
        const slideshowcurrentimg = document.getElementById('slideshowcurrentimg');

        currentImageIndex = i;
        updateSlideImage();

        slideshow.style.display = 'block';
    });
}


/* Take care of miniature box */

const closeSlide = document.querySelector('.closeslide');
closeSlide.addEventListener('click', () => {
    const slideshow = document.querySelector('.slideshow');
    slideshow.style.display = 'none';
});

const previous = document.querySelector('.previous');
previous.addEventListener('click', () => {
    currentImageIndex--;
    if (currentImageIndex < 1)
        currentImageIndex = 8;

    updateSlideImage();
});

const next = document.querySelector('.next');
next.addEventListener('click', () => {
    currentImageIndex++;
    if (currentImageIndex > 8)
        currentImageIndex = 1;

    updateSlideImage();
});
