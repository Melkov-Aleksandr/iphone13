const sendForm = () => {
    const buttonOpenModal = document.querySelector('.card-details__button-delivery');
    const cardDetailsTitle = document.querySelector('.card-details__title');
    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('.modal__title');
    const buttonCloseModal = modal.querySelector('.modal__close');
    const modalForm = document.querySelector('form');
    const modalSend = document.querySelector('.modal__submit');

    buttonOpenModal.addEventListener('click', () => {
        modalTitle.textContent = cardDetailsTitle.textContent;
        modal.style.display = 'flex';
    })

    buttonCloseModal.addEventListener('click', () => {
        modal.style.display = 'none';
    })

    modalForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const labels = document.querySelectorAll('.modal__label');

        const sendMeassege = {}

        labels.forEach(label => {
            const span = label.querySelector('span');
            const input = label.querySelector('input');

            sendMeassege[span.textContent] = input.value;
            input.value = '';
        })

        modal.style.display = 'none';

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendMeassege),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => {
                console.log('Отправленно');
            })
    })
}

sendForm();