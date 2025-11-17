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

for( let i = 1; i<=8 ; i++) {
    const folio = document.getElementById('folio'+i.toString());
    folio.addEventListener('click', ()=>{
        console.log('Clicked on folio', i);

        const slideshow = document.querySelector('.slideshow');
        const slideshowcurrentimg = document.getElementById('slideshowcurrentimg');
        slideshowcurrentimg.src = './assets/img/p' + i.toString() + '.jpg';
        slideshow.style.display = 'block';
    });
}
