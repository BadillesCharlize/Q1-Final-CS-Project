window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('profile-firstName').textContent = localStorage.getItem('profile-firstName') || '';
  document.getElementById('profile-lastName').textContent = localStorage.getItem('profile-lastName') || '';
  document.getElementById('profile-email').textContent = localStorage.getItem('profile-email') || '';
  document.getElementById('profile-sex').textContent = localStorage.getItem('profile-sex') || '';
  document.getElementById('profile-reason').textContent = localStorage.getItem('profile-reason') || '';
});