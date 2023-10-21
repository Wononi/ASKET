import '../style/style.scss'

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            document.querySelector('.scroll__nav').classList.add('scroll__nav-show')
        } else {
            document.querySelector('.scroll__nav').classList.remove('scroll__nav-show')
        }
    });
});

observer.observe(document.querySelector('header nav'))

const text = document.querySelector('.download__wrapper p');

const mediaQuery = window.matchMedia('(max-width: 1023px)')

function handleTabletChange(e) {
    if (e.matches) {
        text.innerHTML = `скачай<br>установи<br>работай`;
    } else {
        text.innerHTML = 'скачай → установи → работай';
    }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)

