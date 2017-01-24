//JavaScript restaurant
//use the generateMenu() function to get a menu object when you need it

// This is a test order. It should take 8 seconds and should cost $65.
// You can also test your restaurant functions with other menu items.

// define order variables "main" "side" "drink"

order('Steak', 'Baked Potato', 'Beer'); 

// WRITE YOUR CODE BELOW
// // Order Function Here:


function order(main, side, drink) { 
    if (main && side && drink === undefined) { //run error message if either variable is undefined//
        console.log('Please Order Again')
    }
    else {
        cook(main, side, drink) //run cook function

    }
};

// Cook Function Here:


function cook(main, side, drink) { //run cook function with different variables
    let menu = generateMenu(); //add generateMenu function as "menu" variable
    let cookTime = 0;       //create empty variable for cook time
    for (var i = 0; i < menu.length; i++) { //creates loop that searchs for menu items
        if (main === menu[i].name || side === menu[i].name || drink === menu[i].name) { //searches through menu array to find matching names
            cookTime += menu[i].time //asigns time from array onto cooktime value


        }
    }
    console.log("Your Order Will Take " + cookTime + " Minutes.");
    setTimeout(function () {
        serve(main, side, drink);
    }, (cookTime * 1000));

}


// Serve Function Here:
function serve(main, side, drink) {
    let menu = generateMenu();
    let fPrice = 0;
    for (var i = 0; i < menu.length; i++) {
        if (main === menu[i].name || side === menu[i].name || drink === menu[i].name) {
            fPrice += menu[i].price
        }

    }
    console.log("Your Total is " + fPrice + " Dollars.")
}







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
        name: 'Beer',
        time: 1,
        price: 5
    }, {
        name: 'Wine',
        time: 1,
        price: 10
    }]
}