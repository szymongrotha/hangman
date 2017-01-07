var newGameBtn = document.getElementById('js-newgame'),
	jsMain = document.getElementById('main'),
	jsAlphabet = document.getElementById('alphabet');
	cars = ["SABB", "VOLVO", "BMW"];
	fruits = ["BANANA", "ORANGE", "APPLE", "MANGO"];
	animals = ['CAT', 'DOG', 'HORSE', 'DUCK']

newGameBtn.addEventListener('click', newGameStart);

function newGameStart() {
	jsMain.style.display = 'none';
	jsAlphabet.style.display = 'block';
}

$('.letter').on('click', function() {
    var pickedLetter = ($(this).html());
    console.log(pickedLetter)
    return pickedLetter;
});

