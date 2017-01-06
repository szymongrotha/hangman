var newGameBtn = document.getElementById('js-newgame'),
	jsMain = document.getElementById('main');
	jsAlphabet = document.getElementById('alphabet')

newGameBtn.addEventListener('click', newGameStart);


function newGameStart() {
	jsMain.style.display = 'none';
	jsAlphabet.style.display = 'block';
}