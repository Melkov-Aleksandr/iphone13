const tabsFunction = () => {
    const tabs = document.querySelectorAll('.card-detail__change');
    const tabsTitle = document.querySelector('.card-details__title');
    const price = document.querySelector('.card-details__price');
    const image = document.querySelector('.card__image-item');
    const title = document.querySelector('title');

    const tabOption = [
        {
            name: 'Graphite',
            memory: '128',
            price: '60000',
            image: 'iPhone-graphite.webp',
        },
        {
            name: 'Silver',
            memory: '256',
            price: '70000',
            image: 'iPhone-silver.webp',
        },
        {
            name: 'Siera Blue',
            memory: '512',
            price: '65000',
            image: 'iPhone-sierra_blue.webp',
        }
    ]

    const changeContent = (index) => {
        title.textContent = `Смартфон Apple iPhone 13 Pro ${tabOption[index].memory}GB ${tabOption[index].name}`
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabOption[index].memory}GB ${tabOption[index].name}`;
        price.textContent = `${tabOption[index].price}₽`;
        image.src = `img/${tabOption[index].image}`;
    }

    const changeActiveTabs = (indexClick) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active');

            if (index === indexClick) {
                tab.classList.add('active');
            }
        })

        changeContent(indexClick);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            changeActiveTabs(index);
        })
    })

    changeContent(0);
}

tabsFunction();