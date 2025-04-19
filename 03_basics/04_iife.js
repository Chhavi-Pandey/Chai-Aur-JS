// Immediately Invoked Function Expression (IIFE)

(function panCake() {  // IIFE style
    // named iife
    console.log(`DB Connected`);
})(); // this parenthesis for calling function or execution

// IIFE : for immediately executing functions like connecting databases or saving code or specific function polluting from global scope

((name) => { // Unnamed iife : arrow fun with param; it can be without param like before but after iife must write semicolon to terminate this function as this fun don't know when to stop so otherwise will give error
    console.log(`DB connected TWo ${name}`);
})('Freya');