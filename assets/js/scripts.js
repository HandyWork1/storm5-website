
// Tailwind CSS configuration
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#151A50',    // Deep Blue
                secondary: '#B6782C',  // Gold
                tertiary: '#F8BB48',   // Yellow-Gold
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        }
    }
}

// Mobile Menu Functionality
// Ensure the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
	const mobileMenu = document.getElementById('mobile-menu');
	const mobilePanel = document.getElementById('mobile-menu-panel');
	const closeBtn = document.getElementById('mobile-menu-close');
	const toggleBtn = document.getElementById('menu-toggle');

	// Open Mobile Menu
	toggleBtn?.addEventListener('click', () => {
		document.body.classList.add('overflow-hidden');
		mobileMenu.classList.remove('hidden');
		setTimeout(() => {
			mobileMenu.classList.add('opacity-100');
			mobilePanel.classList.remove('translate-x-full');
		}, 10);
	});

	// Close Mobile Menu
	const closeMobileMenu = () => {
		mobileMenu.classList.remove('opacity-100');
		mobilePanel.classList.add('translate-x-full');
		document.body.classList.remove('overflow-hidden');
		setTimeout(() => mobileMenu.classList.add('hidden'), 400);
	};

	closeBtn?.addEventListener('click', closeMobileMenu);

	// Auto-close dropdown items
	window.closeMobileMenu = closeMobileMenu;

	// Toggle Dropdown
	window.toggleDropdown = (id) => {
		const dropdown = document.getElementById(id);
		const arrow = document.getElementById('arrow-' + id.replace('Dropdown', ''));
		dropdown.classList.toggle('hidden');
		arrow.classList.toggle('rotate-180');
	};
});

