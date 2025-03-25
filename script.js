// Ensure all DOM elements load before running scripts
document.addEventListener('DOMContentLoaded', () => {
  
	// ================================
	// Highlight Active Navigation Link
	// ================================
	const links = document.querySelectorAll('.nav-list li a');
	links.forEach(link => {
	  link.addEventListener('click', (e) => {
		links.forEach(l => l.classList.remove('active'));
		e.target.classList.add('active');
	  });
	});
  
	// ================================
	// Mobile Menu Toggle
	// ================================
	const menuToggle = document.querySelector('.menu-toggle');
	const navList = document.querySelector('.nav-list');
  
	menuToggle.addEventListener('click', () => {
	  navList.classList.toggle('active');
	});
  
	// ================================
	// Contact Form Submission Handling
	// ================================
	const contactForm = document.getElementById('contactForm');
	if (contactForm) {
	  contactForm.addEventListener('submit', function (e) {
		e.preventDefault();
  
		const formData = new FormData(this);
  
		fetch('https://api.web3forms.com/submit', {
		  method: 'POST',
		  body: formData
		})
		  .then(response => response.json())
		  .then(data => {
			if (data.success) {
			  // Clear the form fields
			  contactForm.reset();
  
			  // Show success message
			  const successMessage = document.getElementById('successMessage');
			  successMessage.style.display = 'block';
  
			  // Hide success message after 5 seconds
			  setTimeout(() => {
				successMessage.style.display = 'none';
			  }, 5000);
			} else {
			  alert('There was an error submitting the form. Please try again.');
			}
		  })
		  .catch(error => {
			console.error('Error:', error);
			alert('There was an error submitting the form. Please try again.');
		  });
	  });
	}
  
	// ================================
	// Toggle Dropdown Menu
	// ================================
	const dropdownBtn = document.querySelector('.dropbtn');
	if (dropdownBtn) {
	  dropdownBtn.addEventListener('click', (e) => {
		e.preventDefault();
		dropdownBtn.parentElement.classList.toggle('active');
	  });
	}
  
	// ================================
	// Product Display (3x2 on Desktop)
	// ================================
	const products = document.querySelectorAll('.product-item');
	if (products.length > 0) {
	  const container = document.querySelector('.product-container');
	  container.innerHTML = '';
  
	  products.forEach((product, index) => {
		container.appendChild(product);
	  });
  
	  // Ensure the grid works correctly
	  container.style.display = 'grid';
	  container.style.gridTemplateColumns = 'repeat(3, 1fr)';
	  container.style.gap = '20px';
	}
  });
  // Toggle menu for categories on mobile view
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Show/hide categories sidebar on mobile
const sidebar = document.querySelector('.categories-sidebar');
const toggleSidebar = () => {
  sidebar.classList.toggle('show');
};

// Close sidebar when clicking outside
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
    sidebar.classList.remove('show');
  }
});
// Toggle categories dropdown
const dropdownButton = document.querySelector('.dropdown-button');
const dropdown = document.querySelector('.dropdown');

dropdownButton.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});
