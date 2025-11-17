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

let toggleMiniatures = false;
const menuPortfolio = document.getElementById('menuPortfolio');
const boiteMiniatures = document.getElementById('boiteMiniatures')

menuPortfolio.addEventListener('click', () => {
    toggleMiniatures = !toggleMiniatures;
    boiteMiniatures.style.display = toggleMiniatures ? 'block' : 'none';
});

