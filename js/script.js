'use strict';

let moncontenu = document.getElementById('contenu');

moncontenu.innerHTML = 'Bonjour le monde';

fetch('./text.txt').then( (response) => {
    response.text().then( (data) => {
        console.log(data);
        moncontenu.innerHTML = data;
    } );
} );

fetch('./data.json').then( (response) => {
    response.json().then( (data) => {
        console.log(data);
        let html = '<ul>';
        for (let item of data) {
            html += '<li>' + item.nom + ' ' + item.prenom + '</li>';
        }
        html += '</ul>'
        moncontenu.innerHTML = html;
    } );
} );