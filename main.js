// Toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('nav-links').classList.toggle('active');
  // Placeholder for future interactivity
console.log("Sketch Your Dreams page loaded.");
}
});
document.getElementById('menu-toggle').addEventListener('click', function() {
  document.getElementById('nav-links').classList.toggle('active');
  // Placeholder for future interactivity
console.log("Sketch Your Dreams page loaded.");
}
});

// Placeholder for future interactivity
console.log("Sketch Your Dreams page loaded.");
}
// scripts.js

// Function to handle the click event on contact links
function handleContactClick(event) {
  console.log(`User clicked on: ${event.target.textContent}`);
}

// Add event listeners to contact links
document.addEventListener('DOMContentLoaded', () => {
  const contactLinks = document.querySelectorAll('.contact-info a');
  contactLinks.forEach(link => {
    link.addEventListener('click', handleContactClick);
  });
});
// Function to toggle the navigation menu on small screens
function toggleNavbar() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
