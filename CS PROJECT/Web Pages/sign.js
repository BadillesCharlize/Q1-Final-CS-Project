document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('signupForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Form submitted!');
    });
  } else {
    console.error("signupForm not found in the DOM");
  }
});