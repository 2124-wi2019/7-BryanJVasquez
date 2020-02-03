/*
Bryan Vasquez
Vasquez_a07b.js
INFO 2124
Thoendel
02/02/2020
*/
/* DO NOT MODIFY CODE BETWEEN THESE LINES */
const standardInput = process.stdin;            
standardInput.resume();
standardInput.setEncoding('utf8');
const badFoods = [];
const groceryItems = [];
clearScreen();
console.log(getPrompt(groceryItems));
/* DO NOT MODIFY CODE BETWEEN THESE LINES */

//Step 1
buildFoodsList (badFoods, "bread", "beer","pizza", "meat", "candy"); //Declaring builFoodsList array with 5 items 

standardInput.on('data', function (text) {
    //This line will remove line breaks 
    //\n\r in window, \r in macOS
    text = text.replace('\n', '').replace('\r', '');
    //Step 4 Begin
    clearScreen();
    while(true) {                                                  //While loop to repeat the user input for adding more items.
    if (text === "Q"||"q"){                                        //If enter Q or q the program will end.
        clearScreen();
        console.log("Bye!");
        process.exit();
    }
    else if (text === "V"||"v"){                                   //This will show the item list
        clearScreen();
        displayList(groceryItems);
        console.log(displayList());
        console.log(getPrompt(groceryItems));
    }
    else if (text === checkItem(badFoods)){                        //This will avoid the bad food for our health
        console.log(`Error: that item is not safe for your allergies.
        It has not been added to your list.
        `);
        console.log(getPrompt(groceryItems));

    }
    else {                                                         //This will add the healthy food
        formatItem.push(text);
        console.log(`Item added to list!`
        );
        console.log(getPrompt(groceryItems));
    }
}
    //Step 4 End
});

/* DEFINE YOUR FUNCTIONS BETWEEN THIS LINE */

//Step 2
function buildFoodsList (badFoods,...itemsfood){                       //passing the array itemsfood to badFoods array using for loop
    
    for (item of itemsfood){
        
        badFoods.push(item);
        
    }
     
}   

function getPrompt(groceryItems){                                     /*Creating getPrompt Function and passing greceryItems as argument
                                                                       and displaying the input user on console.*/

 return `Your grocery list contains ${groceryItems.length} items
please enter a grocery item.
Enter Q to quit
Enter V to view list
========================`;
}

function displayList(groceryItems){                                   //Creating the displayList function to display groceryItems
    listing = [groceryItems.length]
    for (food of groceryItems){
        for (lista of listing){ 
    console.log(`Grocery List 
    (${groceryItems.length}) Items
    ====================`);
    console.log(lista+"). "+food);
    }
    }
    
}


//Step 3
function checkItem(groceryListItem, badFoods ){                       //Checking which food is good and which is bad with checkItem function

    if (groceryListItem === badFoods[0].toUpperCase() || groceryListItem === badFoods[0].toLowerCase()){
        return true;
    }
    else if (groceryListItem === badFoods[1].toUpperCase() || groceryListItem === badFoods[1].toLowerCase()){
        return true;
    }
    else if (groceryListItem === badFoods[2].toUpperCase() || groceryListItem === badFoods[2].toLowerCase()){
        return true;
    }
    else if (groceryListItem === badFoods[3].toUpperCase() || groceryListItem === badFoods[3].toLowerCase()){
        return true;
    }
    else if (groceryListItem === badFoods[4].toUpperCase() || groceryListItem === badFoods[4].toLowerCase()){
        return true;
    }
    else{
        return false;
    }

}


function formatItem(gLI){                                           //Displaying any string correctly with formatItem Function

    return gLI.charAt(0).toUpperCase().trimLeft()+gLI.slice(1,10).toLowerCase().trim();
}

/* AND THIS LINE */

function clearScreen() {
    console.log('\033[2J');
}
