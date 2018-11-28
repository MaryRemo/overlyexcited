// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
function addExcitement(theWordArray); {
    
    let buildMeUp = ""
    // Each time the for loop executes, you're going to add one more word to this string

    for (let i = 0; i < theWordArray.length; i++) {
        let addIndex = i+1
        // Concatenate the new word onto buildMeUp
        if (addIndex % 3 === 0) {
            buildMeUp += " " + theWordArray[i] + "!";
        }
        else {buildMeUp += " " + theWordArray[i];}
        console.log(buildMeUp);
        // Print buildMeUp to the console
    }

}

// Invoke the function and pass in the array
addExcitement(sentence)
