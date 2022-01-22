const scrollFunction = () => {
    const links = document.querySelectorAll('.header-menu__item a');
    const details = document.querySelector('.card-details__link-characteristics');

    seamless.polyfill();

    details.addEventListener('click', (event) => {
        event.preventDefault();

        if (details) {
            seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                behavior: 'smooth',
                block: 'start',
            })
        }
    })

    links.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();
            const id = element.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if (section) {
                seamless.elementScrollIntoView(section, {
                    behavior: 'smooth',
                    block: 'start',
                })
            } else {
                seamless.elementScrollIntoView(document.querySelector("#characteristics"), {
                    behavior: 'smooth',
                    block: 'start',
                })
            }


        })
    })
}

scrollFunction();
