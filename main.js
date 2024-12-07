document.querySelector('.button-login').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('preloader').style.display = 'flex';
  setTimeout(function() {
      window.location.href = '/registration.html';
  }, 3000);
});