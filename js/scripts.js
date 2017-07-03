var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';

var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();

var secondText = text.replace('Velociraptor', dinosaurUpperCased);

console.log(secondText.length); 

var finalText = secondText.slice(0,72);

console.log(finalText);