const questions = document.querySelectorAll('.faq-question');

questions.forEach(q => {
  q.addEventListener('click', () => {
    // Fecha todos
    questions.forEach(item => {
      if (item !== q) {
        item.classList.remove('active');
        item.nextElementSibling.style.maxHeight = 0;
        item.nextElementSibling.style.opacity = 0;
      }
    });

    // Alterna o clicado
    const answer = q.nextElementSibling;
    const isActive = q.classList.contains('active');
    if (isActive) {
      q.classList.remove('active');
      answer.style.maxHeight = 0;
      answer.style.opacity = 0;
    } else {
      q.classList.add('active');
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.opacity = 1;
    }
  });
});