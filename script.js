
document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleBtn');
  const sidebar = document.getElementById('sidebar');
  const mainContent = document.getElementById('mainContent');

  toggleBtn.addEventListener('click', function () {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      sidebar.classList.toggle('active');
    } else {
      sidebar.classList.toggle('collapsed');
      mainContent.classList.toggle('expanded');
    }
  });





  // Optional: close sidebar when clicking outside (on mobile)
  document.addEventListener('click', function (e) {
    if (
      window.innerWidth <= 768 &&
      !sidebar.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      sidebar.classList.remove('active');
    }
  });

  // Submenu toggle on click only
  document.querySelectorAll('.submenu-toggle').forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const submenu = this.nextElementSibling;

      // Optional: close other submenus
      document.querySelectorAll('.submenu').forEach(menu => {
        if (menu !== submenu) {
          menu.classList.remove('open');
        }
      });

      submenu.classList.toggle('open');

      // Toggle arrow rotation
      const arrow = this.querySelector('.arrow');
      if (arrow) arrow.classList.toggle('rotated');
    });
  });
});

// image preview
  function previewImage(event) {
    const input = event.target;
    const preview = document.getElementById('imagePreview');
    const container = document.getElementById('imagePreviewContainer');

    if (input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = function (e) {
        preview.src = e.target.result;
        container.style.display = 'block';
      };

      reader.readAsDataURL(file);
    } else {
      preview.src = '#';
      container.style.display = 'none';
    }
  }