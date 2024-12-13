document.querySelector('.button-login').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('preloader').style.display = 'flex';
  setTimeout(function() {
      window.location.href = 'https://maynik.github.io/Homework13/registration.html';
  }, 3000);
});