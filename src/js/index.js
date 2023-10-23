import '../style/style.scss'

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            document.querySelector('.scroll__nav').classList.add('scroll__nav-show');
        } else {
            document.querySelector('.scroll__nav').classList.remove('scroll__nav-show');
        }
    });
});

observer.observe(document.querySelector('header nav'));

const text = document.querySelector('.download__wrapper p');

const mediaQuery = window.matchMedia('(max-width: 1023px)');

function handleTabletChange(e) {
    if (e.matches) {
        text.innerHTML = `скачай<br>установи<br>работай`;
    } else {
        text.innerHTML = 'скачай → установи → работай';
    }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

const navigation = Array.from(document.querySelectorAll('header nav a'));
const navigationScroll = Array.from(document.querySelectorAll('.scroll__nav a'));

navigation.splice(0, 1);
navigation.splice(3, 1);
navigationScroll.splice(0, 1);
navigationScroll.splice(3, 1);

const observers = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target.getAttribute('id') === 'for-what') {
            navigation[0].classList.add('active');
            navigation[1].classList.remove('active');
            navigation[2].classList.remove('active');
            navigationScroll[0].classList.add('active');
            navigationScroll[1].classList.remove('active');
            navigationScroll[2].classList.remove('active');
        } else
            if (entry.isIntersecting && entry.target.getAttribute('id') === 'for-who') {
                navigation[0].classList.remove('active');
                navigation[1].classList.add('active');
                navigation[2].classList.remove('active');
                navigationScroll[0].classList.remove('active');
                navigationScroll[1].classList.add('active');
                navigationScroll[2].classList.remove('active');
            } else
                if (entry.isIntersecting && entry.target.getAttribute('id') === 'more') {
                    navigation[0].classList.remove('active');
                    navigation[1].classList.remove('active');
                    navigation[2].classList.add('active');
                    navigationScroll[0].classList.remove('active');
                    navigationScroll[1].classList.remove('active');
                    navigationScroll[2].classList.add('active');
                }
    });
});

let arrSection = [];
arrSection.push(document.querySelector('.for-what h2'), document.querySelector('.for-who h2'), document.querySelector('.more__wrapper'));

arrSection.forEach(el => {
    observers.observe(el);
})

const forWhat = document.querySelector("header");
const forWho = document.querySelector(".for-who");
const more = document.querySelector(".more");

navigation[0].addEventListener("click", () => {
    forWhat.scrollIntoView({ block: "start", behavior: "smooth" });
});

navigationScroll[0].addEventListener("click", () => {
    forWhat.scrollIntoView({ block: "start", behavior: "smooth" });
});

navigation[1].addEventListener("click", () => {
    forWho.scrollIntoView({ block: "start", behavior: "smooth" });
});

navigationScroll[1].addEventListener("click", () => {
    forWho.scrollIntoView({ block: "start", behavior: "smooth" });
});

navigation[2].addEventListener("click", () => {
    more.scrollIntoView({ block: "start", behavior: "smooth" });
});

navigationScroll[2].addEventListener("click", () => {
    more.scrollIntoView({ block: "start", behavior: "smooth" });
});
