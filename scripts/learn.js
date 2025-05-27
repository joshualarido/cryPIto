// OPEN CLOSE FAQ
document.querySelectorAll('.faq').forEach(faq => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('open');
    });
});