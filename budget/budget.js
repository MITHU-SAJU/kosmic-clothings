
 
 function activateTab(button) {
    document.querySelectorAll('.tab-buttons .btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    // Optional: load content dynamically or switch visible sections here
  }