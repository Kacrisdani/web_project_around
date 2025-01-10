const editButton = document.querySelector('.profile__edit-button');
const popupContainer = document.querySelector('.popupContainer');
const closeButton = document.querySelector('.popup__close-button');

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


const formElement = document.querySelector('.popup__form');

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    const nameInput = document.querySelector('#nome');
    const jobInput = document.querySelector('#profissao');

    const nome = nameInput.value;
    const profissao = jobInput.value;

    const profileName = document.querySelector('.profile__name');
    const profileJob = document.querySelector('.profile__job');

    profileName.textContent = nome;
    profileJob.textContent = profissao;

    popupContainer.classList.remove('active')

}

formElement.addEventListener('submit', handleProfileFormSubmit);

const likeButtons = document.querySelectorAll('.gallery__buttonLike');

likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const likeIcon = button.querySelector('img');
        button.classList.toggle('active');
    
    if (button.classList.contains('active')) {
        likeIcon.src = './images/likeactive.svg';
    } else {
        likeIcon.src = './images/like.svg';
    }
});
});
