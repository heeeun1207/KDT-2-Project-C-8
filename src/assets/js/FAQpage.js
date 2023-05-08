document.addEventListener('DOMContentLoaded', function() {
  var modal = document.querySelector('.modal');
  var modalButton = document.querySelector('.modal-button');
  var modalContent = document.querySelector('.modal-content');
  var sections = document.querySelectorAll('section');

  sections.forEach(function(section) { 
    section.addEventListener('click', function() { 
      modal.style.display = 'block';
    });
  });

  modal.addEventListener('click', function(event) {
    if (event.target === modal || event.target === modalContent) {
      modal.style.display = 'none';
    }
  });
});