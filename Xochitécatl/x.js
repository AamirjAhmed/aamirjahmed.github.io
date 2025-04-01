// x.js

// 1) Horizontal wheel scroll for the NEWS section
document.addEventListener('DOMContentLoaded', () => {
  const newsScroll = document.querySelector('.news-scroll');
  newsScroll.addEventListener('wheel', (e) => {
    e.preventDefault();
    newsScroll.scrollLeft += e.deltaY;
  });

  // 2) Toggle row-mode ↔ grid-mode with a fade
  const exhibitsContainer = document.getElementById('exhibitsContainer');
  const toggleExhibitsBtn = document.getElementById('toggleExhibitsBtn');

  toggleExhibitsBtn.addEventListener('click', () => {
    // Fade out
    exhibitsContainer.classList.add('fade-out');

    // After fade-out finishes (~1.5s), do the layout swap & fade in
    setTimeout(() => {
      // Switch row ↔ grid
      if (exhibitsContainer.classList.contains('row-mode')) {
        exhibitsContainer.classList.remove('row-mode');
        exhibitsContainer.classList.add('grid-mode');
        toggleExhibitsBtn.textContent = 'Hide All Exhibits';
      } else {
        exhibitsContainer.classList.remove('grid-mode');
        exhibitsContainer.classList.add('row-mode');
        toggleExhibitsBtn.textContent = 'Show All Exhibits';
      }

      // Fade back in
      exhibitsContainer.classList.remove('fade-out');
    }, 1000); // matches transition: opacity 1s
  });
});
