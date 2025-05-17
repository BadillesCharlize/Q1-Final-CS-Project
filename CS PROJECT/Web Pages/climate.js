// climate.js -- shared script for signup and profile pages

document.addEventListener('DOMContentLoaded', function() {
  // If it's the signup page (form exists)
  var form = document.getElementById('signupForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Get form values
      const firstName = document.getElementById('firstName').value.trim();
      const lastName = document.getElementById('lastName').value.trim();
      const sex = document.querySelector('input[name="sex"]:checked');
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const contact = document.getElementById('contact').value.trim();
      const reason = document.getElementById('reason').value.trim();

      // Clear previous errors
      document.querySelectorAll('.error').forEach(el => el.textContent = '');

      let hasError = false;

      // Validation
      if (!firstName) {
        document.getElementById('error-firstName').textContent = 'required';
        hasError = true;
      }
      if (!lastName) {
        document.getElementById('error-lastName').textContent = 'required';
        hasError = true;
      }
      if (!sex) {
        document.getElementById('error-sex').textContent = 'required';
        hasError = true;
      }
      if (!email) {
        document.getElementById('error-email').textContent = 'required';
        hasError = true;
      }
      if (!password) {
        document.getElementById('error-password').textContent = 'required';
        hasError = true;
      }
      if (!reason) {
        document.getElementById('error-reason').textContent = 'required';
        hasError = true;
      }

      if (hasError) return;

      // Store required info in localStorage for profile page
      localStorage.setItem('profile-firstName', firstName);
      localStorage.setItem('profile-lastName', lastName);
      localStorage.setItem('profile-sex', sex.value);
      localStorage.setItem('profile-email', email);
      localStorage.setItem('profile-reason', reason);

      // Redirect to profile page
      window.location.href = 'profile.html';
    });
  }

  // If it's the profile page (profile-firstName exists)
  if (document.getElementById('profile-firstName')) {
    document.getElementById('profile-firstName').textContent = localStorage.getItem('profile-firstName') || '';
    document.getElementById('profile-lastName').textContent = localStorage.getItem('profile-lastName') || '';
    document.getElementById('profile-email').textContent = localStorage.getItem('profile-email') || '';
    document.getElementById('profile-sex').textContent = localStorage.getItem('profile-sex') || '';
    document.getElementById('profile-reason').textContent = localStorage.getItem('profile-reason') || '';
  }
});