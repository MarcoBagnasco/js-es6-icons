/*************************
 * ICONS DISPLAY 
 *************************/
/**
 *  1.Partendo dalla struttura dati , mostriamo in pagina tutte le icone disponibili
 *  2.Coloriamo le icone per tipo
 *  3.Creiamo una select con i tipi di icone e usiamola per filtrare le icone
 */

// 1.
// Icons container
const container = document.querySelector('.icons');
// container.innerHTML = 'ciao'; //test

// Print in HTML
printIcons(icons,container);

/******
 * FUNCTIONS
 ******/
/**
 * Print in HTML property of objects contained in array
 * @param {array} icons //array of objects
 * @param {DOM} container //DOM node
 */
function printIcons(icons, container) {

    let output = '';

    icons.forEach(icon => {
        // Destructuring icon property
        const {name, prefix, family} = icon;
        // Add markup
        output += 
        `<div class="icon">
            <i class="${family} ${prefix}${name}"></i>
            <div class="name">${name}</div>
        </div>
        `
    });
    // Print in HTML
    container.innerHTML = output;
}