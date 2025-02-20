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

//Adicionar conteúdo na galeria//

const galleryContainer = document.querySelector('.gallery');
const cardTemplate = document.querySelector('#card-template').content.querySelector('.gallery__card');

const initialCards = [
    {
      name: "Vale de Yosemite",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
    },
    {
      name: "Lago Louise",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
    },
    {
      name: "Montanhas Carecas",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
    },
    {
      name: "Parque Nacional da Vanoise ",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
    }
  ];
  

function addCard(name, link) {
    const cardElement = cardTemplate.cloneNode(true);

    const cardImage = cardElement.querySelector('.gallery__card-image');
    const cardTitle = cardElement.querySelector('.gallery__card-title');

    cardImage.src = link;
    cardImage.alt = name; 
    cardTitle.textContent = name;

    // Abrir imagem

    cardImage.addEventListener('click', () => {
        openImagePopup(cardImage.src, cardImage.alt);
    });


    // Botão de curtir
    const likeButton = cardElement.querySelector('.gallery__buttonLike');
    likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('active');
        const likeIcon = likeButton.querySelector('img');
        likeIcon.src = likeButton.classList.contains('active') ? './images/likeactive.svg' : './images/like.svg';
    });

    // Botão de excluir
    const trashButton = cardElement.querySelector('.gallery__buttonTrash');
    trashButton.addEventListener('click', () => {
        cardElement.remove()
        return cardElement

    });

    galleryContainer.prepend(cardElement);
}

// Adicionar os cartões 
initialCards.forEach(card => addCard(card.name, card.link));

const popupForm = document.querySelector('.popupNewPlace__form');
const popupPlace = document.querySelector('.popupContainerPlace');
const addButton = document.querySelector('.profile__buttonAdd');
const closeButtonPlace = document.querySelector('.popupNewPlace__close-button');


addButton.addEventListener("click", function () {
    popupPlace.classList.add('active');
});


closeButtonPlace.addEventListener("click", function () {
    popupPlace.classList.remove('active');
});


popupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#title').value;
    const link = document.querySelector('#link').value;

    addCard(name, link); 

    popupPlace.classList.remove('active'); 
    popupForm.reset(); 
});

// Popup Imagens
const popupImageContainer = document.querySelector('.popupContainerImage');
const popupImage = document.querySelector('.popupImage__content');
const popupCaption = document.querySelector('.popupImage__caption');
const closeImageButton = document.querySelector('.popupImage__close-button');

function openImagePopup(imageSrc, imageAlt) {
    popupImage.src = imageSrc;
    popupImage.alt = imageAlt;
    popupCaption.textContent = imageAlt;
    popupImageContainer.classList.add('active');
}

closeImageButton.addEventListener('click', () => {
    popupImageContainer.classList.remove('active');
});

// Adicionar evento de clique para abrir a imagem
galleryContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('gallery__card-image')) {
        openImagePopup(event.target.src, event.target.alt);
    }
});