document.addEventListener("DOMContentLoaded",  
function () { 
  const bird = document.querySelector('.bird');
  const button = document.querySelector('.button');

  button.addEventListener('mouseenter', function () {
    bird.classList.add('fly');
  
    const animationEnd = () => {
      if (bird.classList.contains('fly')) {
        bird.classList.remove('fly');
        bird.classList.add('on-the-spot');
        bird.removeEventListener('animationend', animationEnd);
      }
    }

    bird.addEventListener('animationend', animationEnd);
  });

  button.addEventListener('mouseleave', function () {
    bird.classList.remove('on-the-spot');
    bird.classList.add('fly-down');
    
    const removeFlyDown = () => {
      bird.classList.remove('fly-down');
      bird.removeEventListener('animationend', removeFlyDown);
    }

    bird.addEventListener('animationend', removeFlyDown);
  });
});

