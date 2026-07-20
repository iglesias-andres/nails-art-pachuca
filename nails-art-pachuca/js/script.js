// Año dinámico en el footer.
const anioActual = document.getElementById('anio-actual');
if (anioActual) {
	anioActual.textContent = new Date().getFullYear();
}

// Menú hamburguesa mobile.
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuToggle && mobileMenu) {
	menuToggle.addEventListener('click', () => {
		const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
		menuToggle.setAttribute('aria-expanded', String(!expanded));
		mobileMenu.classList.toggle('hidden');
	});

	mobileMenu.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			menuToggle.setAttribute('aria-expanded', 'false');
			mobileMenu.classList.add('hidden');
		});
	});
}
