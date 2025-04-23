document.addEventListener('DOMContentLoaded', () => {
  // Horizontal wheel scroll for the NEWS section (if needed)
  const newsScroll = document.querySelector('.news-scroll');
  newsScroll.addEventListener('wheel', (e) => {
    e.preventDefault();
    newsScroll.scrollLeft += e.deltaY;
  });

  // Toggle between collapsed (one row) and expanded (grid) for exhibits
  const exhibitsContainer = document.getElementById('exhibitsContainer');
  const toggleExhibitsBtn = document.getElementById('toggleExhibitsBtn');

  toggleExhibitsBtn.addEventListener('click', () => {
    if (exhibitsContainer.classList.contains('collapsed')) {
      // Expand: remove 'collapsed', add 'expanded' (animated)
      exhibitsContainer.classList.remove('collapsed');
      exhibitsContainer.classList.add('expanded');
      toggleExhibitsBtn.textContent = 'Hide All Exhibits';
    } else {
      // Collapse instantly: temporarily remove transition
      exhibitsContainer.style.transition = 'none';
      exhibitsContainer.classList.remove('expanded');
      exhibitsContainer.classList.add('collapsed');
      toggleExhibitsBtn.textContent = 'Show All Exhibits';
      // Force reflow to apply the change immediately
      void exhibitsContainer.offsetWidth;
      // Restore transition property
      exhibitsContainer.style.transition = 'max-height 0.8s ease, opacity 0.8s ease';
    }
  });
});
