var text = 'dfsfdsfdsfsdfdsfdsfdsfdsfsdfsdkjfhjkdsfkjsdhkfjhdsjfkhsdjfhdsjkfhsdkjfhsjkdhfjksdhfkjsh';

var dinosaur = 'triceratops';

var dinosaurUpperCased = dinosaur.toUpperCase();

var secondText = text.replace('Velociraptor', dinosaurUpperCased);

console.log(secondText.length); 

var finalText = secondText.slice(0,72);

console.log(finalText);