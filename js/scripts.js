var text = 'Test test test test test test test';

var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();

var secondText = text.replace('Velociraptor', dinosaurUpperCased);

console.log(secondText.length); 

var finalText = secondText.slice(0,secondText.length/2);

console.log(finalText);