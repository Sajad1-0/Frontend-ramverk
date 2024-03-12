import {addition, subtraction} from './module.js';

document.addEventListener('DOMContentLoaded', function () {

    const btn = document.getElementById('clickBtn');
    btn.addEventListener('click', () => {
        console.log('Addition', addition(3, 8));
        console.log('subtraction', subtraction(3, 8));
    })
})
