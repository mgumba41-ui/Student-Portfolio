const filterButtons = document.querySelectorAll('.filter');
const projectCards = document.querySelectorAll('.project-card');
const themeToggle = document.getElementById('themeToggle');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.active').classList.remove('active');
    button.classList.add('active');

    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      const category = card.dataset.category;
      card.style.display = filter === 'all' || category === filter ? 'grid' : 'none';
    });
  });
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? 'Light mode' : 'Dark mode';
});

const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#' || !targetId.startsWith('#')) return;
    event.preventDefault();
    const target = document.querySelector(targetId);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
