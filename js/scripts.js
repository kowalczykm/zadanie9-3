function drawTree(height) {
	var star;

	for (var i = 1; i <= height; i++) {
		star = '';
		for (var j = 1; j <= i; j++) {
			star += '*';
		}
		console.log(star);
	}
}

// drawTree(prompt('Wysokość:'));
drawTree(6);
