const toggleBtn = document.getElementById('toggleExhibitsBtn');
const exhibits = document.getElementById('exhibitsContainer');

toggleBtn.addEventListener('click', () => {
  const isCollapsed = exhibits.classList.toggle('expanded');
  exhibits.classList.toggle('collapsed', !isCollapsed);
  toggleBtn.textContent = isCollapsed
    ? 'Show Less Exhibits'
    : 'Show All Exhibits';
});
