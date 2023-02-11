const button = document.querySelector('.cv-download');

button.addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = '/assets/docs/cvhelen.pdf';
  link.download = 'cvhelen.pdf';
  link.click();
});
