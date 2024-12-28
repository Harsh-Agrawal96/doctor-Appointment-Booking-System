
function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  }
  document.addEventListener('click', (event) => {
    const menu = document.getElementById('profileMenu');
    const profileIcon = event.target.closest('img[onclick="toggleProfileMenu()"]');
    if (!profileIcon && menu && menu.style.display === 'block') {
      menu.style.display = 'none';
    }
  });
