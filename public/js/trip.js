

    var places = require('places.js');
    var placesAutocomplete = places({
        appId: 'JSLJBPTRC9',
        apiKey: 'fe3a389cac2375e56c7401ce1a6c8ffa',
        container: document.querySelector('#address-input')
    });
    placesAutocomplete.on('change', e => console.log(e.suggestion));


