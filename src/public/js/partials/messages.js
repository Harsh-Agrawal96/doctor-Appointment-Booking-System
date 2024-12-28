
window.addEventListener('DOMContentLoaded', (event) => {
  const successAlert = document.querySelector('.msgalert');
  successAlert.classList.add('seenable')
  if (successAlert) {
      setTimeout(() => {
          successAlert.classList.add('hideable')
      }, 3000);
  }
});

function hideAlert(alertId) {
  const element = "." + alertId;
  const alert = document.querySelector(element);
  if (alert) {
      alert.classList.add('hideable')
  }
}