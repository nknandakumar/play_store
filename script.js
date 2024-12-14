window.onload = function () {
    alert("🎉 Welcome to the Google Play Store Retro Website! 🏪");
  };

const navButtons = document.querySelectorAll('nav ul li');
const quickLinks = document.querySelectorAll('.quick-links li');

const allButtons = [...navButtons, ...quickLinks]; 

allButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));

        const pageIds = ['games-page', 'apps-page', 'books-page', 'movies-page', 'kids-page'];
        document.getElementById(pageIds[index % 5]).classList.add('active');
    });
});
