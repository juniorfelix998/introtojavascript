const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive')


const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const cancelAddMovie = () => {
    toggleMovieModal();

};

const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener('click',toggleMovieModal);
backdrop.addEventListener('click',toggleMovieModal);
cancelAddMovieButton.addEventListener('click',cancelAddMovie)

//stopped at 174