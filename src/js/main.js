
import form from './modules/form';
import language from './modules/changeLanguage';



window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    let state = {
    };

    form('[name="text"]', '.btn', '.tasks', '.form');
    language();

});

