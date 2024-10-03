document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.querySelector('.profile__edit_button');
    const popupContainer = document.querySelector('.popup__container');
    const closeButton = document.querySelector('.popup__close_button');

    editButton.addEventListener('click', () => {
        popupContainer.classList.add('active');  
    });

    closeButton.addEventListener('click', () => {
        popupContainer.classList.remove('active'); 
    });

    popupContainer.addEventListener('click', (event) => {
        if (event.target === popupContainer) {
            popupContainer.classList.remove('active');
        }
    });


    let formElement = document.querySelector('.popup__form');

    function handleProfileFormSubmit(evt) {
        evt.preventDefault();

        const nameInput = document.querySelector('.popup__form_input[type="text"]:nth-child(1)');
        const jobInput = document.querySelector('.popup__form_input[type="text"]:nth-child(2)');

        const nome = nameInput.value;
        const profissao = jobInput.value;

        const profileName = document.querySelector('.profile__name');
        const profileJob = document.querySelector('.profile__job');

        profileName.textContent = nome;
        profileJob.textContent = profissao;

        const popupContainer = document.querySelector('.popup__container');
        popupContainer.classList.remove('active')

    }
    
    formElement.addEventListener('submit', handleProfileFormSubmit);

    const likeButtons = document.querySelectorAll('.gallery__buttonLike');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const likeIcon = button.querySelector('img');
            button.classList.toggle('active');
        
        if (button.classList.contains('active')) {
            // Altera para o ícone preenchido
            likeIcon.src = './images/likeactive.svg';
        } else {
            // Altera para o ícone de contorno
            likeIcon.src = './images/like.svg';
        }
    });
});
    
});
