function cargarMapa(mapaId, src, textoOverlay, sublistId) {
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function (iframe) {
        iframe.style.display = 'none';
    });

    var mapa = document.getElementById(mapaId);
    mapa.src = src;
    mapa.style.display = 'block';

    var contentText = document.getElementById('textcontent');
    contentText.textContent = textoOverlay;

    // Muestra la sublista correspondiente si se proporciona un sublistId
    if (sublistId) {
        toggleSublist(sublistId);
        toggleSublist1(sublistId);
    }
}

function mostrarMapa(mapaId, textoOverlay, sublistId) {
    var iframes = document.querySelectorAll('iframe');
    iframes.forEach(function (iframe) {
        iframe.style.display = 'none';
    });

    var mapa = document.getElementById(mapaId);
    mapa.style.display = 'block';

    var contentText = document.getElementById('textcontent');
    contentText.textContent = textoOverlay;

    // Muestra la sublista correspondiente si se proporciona un sublistId
    if (sublistId) {
        toggleSublist(sublistId);
    }
}
function toggleSublist(sublistId) {
    var sublist = document.getElementById(sublistId);
    sublist.style.display = sublist.style.display === 'none' ? 'block' : 'none';

    var allSublists = document.querySelectorAll('.sub-menu');
    allSublists.forEach(function (otherSublist) {
        if (otherSublist.id !== sublistId) {
            otherSublist.style.display = 'none';
        }
    });
}

function toggleSublist1(sublist1Id) {
    var sublist1 = document.getElementById(sublist1Id);
    sublist1.style.display = sublist1.style.display === 'none' ? 'block' : 'none';

    var allSublists1 = document.querySelectorAll('.sublist1');
    allSublists1.forEach(function (otherSublist1) {
        if (otherSublist1.id !== sublist1Id) {
            otherSublist1.style.display = 'none';
        }
    });
}
window.onload = function () {
    // ID del mapa que deseas cargar inicialmente (reemplaza 'mapaInicial' con el ID correcto)
    var mapaInicialId = 'General';

    // URL del mapa inicial (reemplaza la URL con la correcta)
    var urlMapaInicial = 'https://www.google.com/maps/d/u/2/embed?mid=1V92Q-6X8vpOfPcyBbulF1AWWK8gXya4&ehbc=2E312F';

    // Texto overlay del mapa inicial (puedes personalizarlo)
    var textoMapaInicial = 'Red Comunícalo';

    cargarMapa(mapaInicialId, urlMapaInicial, textoMapaInicial);
};
//minimizador menu hamburguesa
function toggleContenidoMenu() {
    var anchoVentana = window.innerWidth;

    // Verifica si la pantalla es menor a 768px usando la media query
    if (anchoVentana <= 768) {
        var contenidoMenu = document.getElementById('menu');
        if (contenidoMenu.style.display === 'none' || contenidoMenu.style.display === '') {
            contenidoMenu.style.display = 'block';
        } else {
            contenidoMenu.style.display = 'none';
        }
    }
}

// Agrega un evento de cambio de tamaño de ventana para ajustar el comportamiento
window.addEventListener('resize', function() {
    var anchoVentana = window.innerWidth;

    // Verifica si la pantalla es menor a 760px usando la media query
    if (anchoVentana > 768) {
        // Si la pantalla es mayor o igual a 760px, asegúrate de que el menú sea visible
        var contenidoMenu = document.getElementById('menu');
        contenidoMenu.style.display = 'block';
    }
});