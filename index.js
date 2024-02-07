document.addEventListener('DOMContentLoaded', () => {
	let popup = document.querySelector('.popup');
	document.querySelector('.btn').onclick = openPopup;
	document.querySelector('#ok').onclick = closePopup;

	function openPopup() {
		popup.classList.add('open-popup');
	}
	function closePopup() {
		popup.classList.remove('open-popup');
	}
});
