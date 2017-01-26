//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.

// define order variables "main" "side" "drink"

order('lobster', 'lobster', 'Steak', 'Steak', 'Lobster', 'Steak', 'Fries', 'Fries', 'Fries', 'Fries', 'Wine', 'Wine', 'Wine');

// WRITE YOUR CODE BELOW
// // Order Function Here:


// function order(main, side, drink) { 
//     if (main && side && drink === undefined) { //run error message if either variable is undefined//
//         console.log('Please Order Again')
//     }
//     else {
//         cook(main, side, drink) //run cook function


function order() {
    let menu = generateMenu()
    let numOfitems = ""
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < menu.length; j++) {
           if (arguments[i].toLowerCase() == menu[j].name.toLowerCase()) {
                numOfitems++
                
            }
        }
    }
    if (numOfitems === arguments.length) {
        cook(arguments)
    }
    else {
        (console.log('We Dont Serve That Here, You Idiot, Get Out!!'))
    }
};

// Cook Function Here:


function cook() { //run cook function with different variables

    let menu = generateMenu(); //add generateMenu function as "menu" variable
    let cookTime = 0;       //create empty variable for cook time
    for (let i = 0; i < arguments[0].length; i++) {
        for (let j = 0; j < menu.length; j++) {
            if (arguments[0][i].toLowerCase() == menu[j].name.toLowerCase()) {
                cookTime += menu[j].time
            }
        }
    }
    // console.log(arguments[0]);
    const argu = arguments[0];

    console.log(`Your Meal Will Take ${cookTime} Minutes.`);
    setTimeout(function () { serve(argu) }, cookTime * 1000)

};



// Serve Function Here:
function serve() {
    console.log(arguments[0])
    let menu = generateMenu();
    let fPrice = 0;
    for (let i = 0; i < arguments[0].length; i++) {
        for (let j = 0; j < menu.length; j++) {
            if (arguments[0][i].toLowerCase() === menu[j].name.toLowerCase()) {
                fPrice += menu[j].price
            };

        }

    }
    console.log(`Your Total is ${fPrice}`)
};






// function that returns a menu array, no need to modify this function
function generateMenu() {
    return [{
        name: 'Steak',
        time: 5,
        price: 40
    }, {
        name: 'Burger',
        time: 4,
        price: 15
    }, {
        name: 'Shawarma',
        time: 4,
        price: 20
    }, {
        name: 'Pizza',
        time: 3,
        price: 10
    }, {
        name: 'Sushi',
        time: 3,
        price: 15
    }, {
        name: 'Lobster',
        time: 5,
        price: 50
    }, {
        name: 'Carpaccio',
        time: 5,
        price: 25
    }, {
        name: 'Chicken',
        time: 4,
        price: 10
    }, {
        name: 'Wild Rice',
        time: 2,
        price: 5
    }, {
        name: 'Fries',
        time: 1,
        price: 5
    }, {
        name: 'Baked Potato',
        time: 1,
        price: 5
    }, {
        name: 'Salad',
        time: 1,
        price: 5
    }, {
        name: 'Coffee',
        time: 1,
        price: 0
    }, {
        name: 'Tea',
        time: 1,
        price: 0
    }, {
        name: 'Pop',
        time: 1,
        price: 0
    }, {
        name: 'beer',
        time: 1,
        price: 5
    }, {
        name: 'Wine',
        time: 1,
        price: 10
    }]
}