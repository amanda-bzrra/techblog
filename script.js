const menuBtn = document.querySelector('.btn_menu');
const menuList = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
	menuList.classList.toggle('active');
})
