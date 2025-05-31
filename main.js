document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.toggle-icon').forEach(icon => {
    const button = icon.closest('button');
    const targetSelector = button.getAttribute('data-bs-target');
    const collapseTarget = document.querySelector(targetSelector);

    // Add event listeners to toggle icons
    collapseTarget.addEventListener('show.bs.collapse', () => {
      icon.classList.remove(icon.dataset.close);
      icon.classList.add(icon.dataset.open);
      icon.classList.remove('text-secondary');
      icon.classList.add('text-danger');
    });

    collapseTarget.addEventListener('hide.bs.collapse', () => {
      icon.classList.remove(icon.dataset.open);
      icon.classList.add(icon.dataset.close);
      icon.classList.remove('text-danger');
      icon.classList.add('text-secondary');
    });
  });
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function () {
    // Remove active from all links
    document.querySelectorAll('.nav-link').forEach(el => el.classList.remove('active'));
    // Add active to clicked link
    this.classList.add('active');
  });
});

// Select the navbar collapse element
const navCollapse = document.querySelector('.navbar-collapse');

// Select all nav links inside the collapse
const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Check if navbar is currently shown
    if (navCollapse.classList.contains('show')) {
      // Collapse the navbar by triggering Bootstrap's collapse hide
      const bsCollapse = bootstrap.Collapse.getInstance(navCollapse) || new bootstrap.Collapse(navCollapse);
      bsCollapse.hide();
    }
  });
});
