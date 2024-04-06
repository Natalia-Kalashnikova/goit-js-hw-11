import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchImages } from './js/pixabay-api';
import { getGallery } from './js/render-functions.js';

const searchForm = document.querySelector('.js-search-form');
const input = document.querySelector('.search-input');
const galleryList = document.querySelector('.gallery-list');
const loader = document.querySelector('.loader-wrapper');


searchForm.addEventListener('submit', handlerSearch);

function handlerSearch(event) {
    event.preventDefault();
    galleryList.innerHTML = '';
    
    loader.classList.remove('is-hidden');

    const inputSearchValue = input.value.trim();

    if (inputSearchValue === '') {
        errorMessage(`Please fill out the input field!`);
        searchForm.reset();

        loader.classList.add('is-hidden');

        return;            
    }

    fetchImages(inputSearchValue)
        .then(data => {            
            if (data.hits.length === 0) {
                errorMessage(`Sorry, there are no images matching your search query. Please try again!`);
                return;
            }
            getGallery(galleryList, data.hits);            
        })
        .catch(error => console.log(error))
        .finally(() => {

            loader.classList.add('is-hidden');

            searchForm.reset(); 
        });
}

const iziToastParam = {
    title: '',    
    position: 'topRight',
    backgroundColor: '#ef4040',
    messageColor: '#fff',
    titleColor: '#fff',
    timeout: 3000,
    pauseOnHover: false, 
}

function errorMessage(message) {
    iziToast.error({
        ...iziToastParam,
        message: `${message}`,
    })
}

