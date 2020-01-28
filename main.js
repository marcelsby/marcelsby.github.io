function showAll() {
	const fullsetHide = document.querySelector('#fullset');
	const filterResult = document.querySelector('#filtered');
	filterResult.innerHTML = '';
	fullsetHide.style.display = 'block';
}

function animeFilter() {
	const fullsetHide = document.querySelector('#fullset');
	const filterResult = document.querySelector('#filtered');

	const imgAnime = [ '16', '02', '19', '05', '21', '22', '37', '07', '10', '27', '11'];
	
	fullsetHide.style.display = 'none';
	filterResult.innerHTML = '';
	filterResult.style.display = 'block';
	
	for (i = 0; i < imgAnime.length; i++) {
		let newImg = document.createElement('img');
		newImg.setAttribute('src', `./images/stock/${imgAnime[i]}.jpeg`);
		filterResult.appendChild(newImg);
	}	
}

function captionFilter() {
	const fullsetHide = document.querySelector('#fullset');
	const filterResult = document.querySelector('#filtered');

	const imgCaption = [ '41', '16', '44', '31', '45', '06', '34', '09'];
	
	fullsetHide.style.display = 'none';
	filterResult.innerHTML = '';
	filterResult.style.display = 'block';
	
	for (i = 0; i < imgCaption.length; i++) {
		let newImg = document.createElement('img');
		newImg.setAttribute('src', `./images/stock/${imgCaption[i]}.jpeg`);
		filterResult.appendChild(newImg);
	}	
}

function landscapeFilter() {
	const fullsetHide = document.querySelector('#fullset');
	const filterResult = document.querySelector('#filtered');

	const imgLandscape = [ '11', '29', '32', '43', '45', '46', '47', '48', '49', '50'];
	
	fullsetHide.style.display = 'none';
	filterResult.innerHTML = '';
	filterResult.style.display = 'block';
	
	for (i = 0; i < imgLandscape.length; i++) {
		let newImg = document.createElement('img');
		newImg.setAttribute('src', `./images/stock/${imgLandscape[i]}.jpeg`);
		filterResult.appendChild(newImg);
	}	
}

