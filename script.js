const button = document.querySelector('.cv-download');

button.addEventListener('click', function() {
  const link = document.createElement('a');
  link.href = '/assets/docs/cvhelen.pdf';
  link.download = 'cvhelen.pdf';
  link.click();
});


const icon = document.querySelector('.icon');
const textP = document.querySelector('.text-p');
const hiddenTextP = document.querySelector('.text-p.hidden');

icon.addEventListener('mouseover', function() {
  textP.style.display = 'none';
  hiddenTextP.style.display = 'block';
});

icon.addEventListener('mouseout', function() {
  textP.style.display = 'block';
  hiddenTextP.style.display = 'none';
});