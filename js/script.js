/**********************************
 * ICONS DISPLAY 
 **********************************/
/**
 *  1.Partendo dalla struttura dati , mostriamo in pagina tutte le icone disponibili
 *  2.Coloriamo le icone per tipo
 *  3.Creiamo una select con i tipi di icone e usiamola per filtrare le icone
 */

// 1.
// Icons container reference
const container = document.querySelector('.icons-box');
// container.innerHTML = 'ciao'; //test

// Print in HTML
// printIcons(icons, container);


// 2.
// Color's Array
const colors = ['#03e166', '#f71668', '#006cfa'];

// Create new icons array with color property
const coloredIcons = colorIcons(icons, colors);

// Print in HTML
printIcons(coloredIcons, container);


// 3.
// Select reference
const select = document.querySelector('#type');

// Create Type's Array
const type = getType(icons);

// Print in HTML
genOption(type, select);

// Filter by selection
selection(select, icons, coloredIcons, container)

// Switch Color
const switchBtn = document.querySelector('.search .btn');

// Click Switch Color Button
switchBtn.addEventListener('click', () => {

    if(switchBtn.innerHTML === 'Remove Colors'){
        // Print without Colors
        printIcons(icons, container);
        // Set select on All
        select.value = 'all';
        // Change Button text
        switchBtn.innerHTML = 'Add Colors';
    } else {
        // Print with Colors
        printIcons(coloredIcons, container);
        // Set select on All
        select.value = 'all';
        // Change Button text
        switchBtn.innerHTML = 'Remove Colors';
    }
});

/*****************
 * FUNCTIONS
 *****************/
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
        `;
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
    
    const coloredIcons = icons.map(icon => {
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

/**
 * Add options into a select tag
 * @param {array} types - array of option
 * @param {DOM} select - DOM node of a select tag
 */
function genOption(types, select){
    
    let output = '';

    types.forEach(type => {
        // Add markup
        output += `<option value="${type}">${type}</option>`;
    });
    // Print in HTML
    select.innerHTML += output;
}

/**
 * Print in HTML objetcs from array based on a selection
 * @param {DOM} select - DOM node of a select tag
 * @param {array} icons - array of objects
 * @param {array} coloredIcons - array of objects with color property
 * @param {DOM} container - DOM node
 */
function selection(select, icons, coloredIcons, container){
    select.addEventListener('change', () => {
        // Selected Option
        const option = select.value;
        
        let filteredIcons = [];
        
        // Create new array filtered by type
        if(switchBtn.innerHTML === 'Remove Colors'){
            // Array with Colors
            filteredIcons = filterIcons(coloredIcons, option);
        } else {
            // Array without Colors
            filteredIcons = filterIcons(icons, option);
        }
    
        // Print in HTML
        printIcons(filteredIcons, container);
    });
}

/**
 * Return new array from another, filtered by type property
 * @param {array} icons - array of objects
 * @param {string} option - Type to select
 * @returns 
 */
function filterIcons(icons, option){
    // If option is all, return original array
    if(option === 'all'){
        return icons;
    }

    // Create new array filtered by type
    const filteredIcons = icons.filter(icon => icon.type === option);

    return filteredIcons;
}

/*******************************
 *  EXPERIMENT
 *******************************/
// Print Icon's HTML Code
const copy = document.querySelector('.icons .selected-icons');

// document.querySelectorAll('.icon i').forEach(element => {
//     element.addEventListener('click', function() {
//         copy.textContent = `${this.outerHTML}`;
//     });
// });

let rootElement = document.querySelector('.icons-box');

// Icons inserted at any time 
rootElement.addEventListener('click',function(event){
    // Trigger element
    let targetElement = event.target;
    // If innerHTML is empty (that's mean is an i tag)
    if(!targetElement.innerHTML){
        copy.textContent = `${targetElement.outerHTML}`;
    }
});