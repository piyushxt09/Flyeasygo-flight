  // Add event listener for the menu-icon click (hamburger icon)
  document.querySelector('.menu-icon').addEventListener('click', function () {
    const navbar = document.querySelector('.header2 .navbar');
    navbar.classList.add('open');
});

// Add event listener for the crossBtn click (close icon)
document.querySelector('.crossBtn').addEventListener('click', function () {
    const navbar = document.querySelector('.header2 .navbar');
    navbar.classList.remove('open');
});


document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
      document.querySelector(".loader-overlay").style.display = "none";
  }, 1000); // 2 seconds delay for demo purposes
});
