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
// printIcons(icons, container);


// 2.
// Color's Array
const colors = ['red', 'green', 'blue'];

// Create new icons array with color property
const coloredIcons = colorIcons(icons, colors);

// Print in HTML
printIcons(coloredIcons, container);


/******
 * FUNCTIONS
 ******/
/**
 * Print in HTML property of objects contained in array
 * @param {array} icons - array of objects
 * @param {DOM} container - DOM node
 */
function printIcons(icons, container) {

    let output = '';

    icons.forEach(icon => {
        // Destructuring icon property
        const {name, prefix, family, color} = icon;
        // Add markup
        output += 
        `<div class="icon">
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <div class="name">${name}</div>
        </div>
        `
    });
    // Print in HTML
    container.innerHTML = output;
}

/**
 * Return a new object's array from another, adding color property
 * @param {array} icons - array of objects
 * @param {array} colors - array color
 * @returns 
 */
function colorIcons(icons, colors){
    //Type's Array
    const types = getType(icons);
    
    const coloredIcons = icons.map((icon) => {
        const indexType = types.indexOf(icon.type);
        return {...icon, color: colors[indexType]};
    });

    return coloredIcons;
}

/**
 * Get property 'Type' from objects contained in array, and return it into a new array
 * @param {array} icons - array of objects
 * @returns 
 */
function getType(icons){
    // Type's Array
    const types = [];
    // Insert type only once
    icons.forEach(icon => {
        if(!types.includes(icon.type)){
            types.push(icon.type);
        }
    });

    return types;
}