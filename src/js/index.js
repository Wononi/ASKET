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