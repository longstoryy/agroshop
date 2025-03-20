// Add interactivity if needed
document.addEventListener('DOMContentLoaded', () => {
	// Example: Highlight active category
	const links = document.querySelectorAll('.categories aside ul li a');
	links.forEach(link => {
	  link.addEventListener('click', (e) => {
		links.forEach(l => l.classList.remove('active'));
		e.target.classList.add('active');
	  });
	});
  });
  document.querySelector('.contact-form form').addEventListener('submit', (e) => {
	const name = document.querySelector('input[name="name"]').value;
	const email = document.querySelector('input[name="email"]').value;
	const message = document.querySelector('textarea[name="message"]').value;
  
	if (!name || !email || !message) {
	  e.preventDefault();
	  alert('Please fill out all fields.');
	}
  });
  document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.querySelector('.menu-toggle');
	const navLinks = document.querySelector('.nav-links');
  
	menuToggle.addEventListener('click', () => {
	  navLinks.classList.toggle('active'); // Toggle mobile menu
	});
  });