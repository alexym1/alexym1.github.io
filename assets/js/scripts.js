// Contact form: GitHub Pages is static, so the form opens the visitor's
// email client with a pre-filled message addressed to data-mailto.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    const value = (id) => form.querySelector('#' + id).value.trim();
    const name = value('name');
    const email = value('email');
    const company = value('company');

    const subject = form.dataset.subject + ' ' + name + (company ? ' (' + company + ')' : '');
    const body = value('message') + '\n\n--\n' + name + '\n' + email + (company ? '\n' + company : '');

    window.location.href =
      'mailto:' + form.dataset.mailto +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    document.getElementById('submitSuccessMessage').classList.remove('d-none');
  });
});
