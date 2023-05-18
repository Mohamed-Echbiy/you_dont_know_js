// lets now understand parsing
/*
after we get a stream aka array of tokenz we turn them into excutable code and pass the to them engine.
what happen in the parsing process : The parsing process in JavaScript primarily focuses on checking the syntax rules and structure of the code, ensuring that it follows the language's grammar. It verifies that the code is written correctly in terms of the syntax rules defined by JavaScript.
*/

//examples =>

let x = 2;
// the code above will be tokinzed and sent the to the parser the parser apply the language syntax rules
/*

1-> let : used to declare varaible 
2 -> naming conventaion if true then it look if we do not use any of the keywords that the language specify for it self like : let const if for
3->  if we stop here because we using let the syntax is valid and we following javascript rules but if we declare the x using const here we will getan error from the parser because we  broke one of the rules that constant must be signed a value  so we need an assignment operator (=) if we accedently put two like this (==) we got an error again because the javascript rule is varaible declaration after it the identefier (name) after it assignment operator (=) after it a value.
4-> value 
*/
