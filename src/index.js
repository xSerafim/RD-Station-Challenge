const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userPhone = document.getElementById('user-phone');
const userRole = document.getElementById('user-role');
const userPassword = document.getElementById('user-password');
const userConfirmPassword = document.getElementById('user-confirm-password');
const userSite = document.getElementsByName('site');
const userSiteAddress = document.getElementById('site-address');
const submitBtn = document.querySelector('.submit-form-btn');

const createPasswordIcon = document.getElementById('create-password');
const confirmPasswordIcon = document.getElementById('confirm-password');

const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const urlFormat = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

userPhone.addEventListener('input', (e) => {
  if (e.target.value.length <= 14) {
    const x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
  } else {
    const x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : `(${x[1]}) ${x[2]}${x[3] ? `-${x[3]}` : ''}`;
  }
});

createPasswordIcon.addEventListener('click', (e) => {
  if (e.target.src.includes('/images/eye-closed.svg')) {
    e.target.src = './images/eye-open.svg';
    userPassword.type = 'text';
  } else {
    e.target.src = './images/eye-closed.svg';
    userPassword.type = 'password';
  }
});

confirmPasswordIcon.addEventListener('click', (e) => {
  if (e.target.src.includes('/images/eye-closed.svg')) {
    e.target.src = './images/eye-open.svg';
    userConfirmPassword.type = 'text';
  } else {
    e.target.src = './images/eye-closed.svg';
    userConfirmPassword.type = 'password';
  }
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(userName.value || false);
  console.log(mailformat.test(userEmail.value) ? userEmail.value : false);
  console.log(userPhone.value.replace(/[\s()+-]/g, '').length >= 10);
  console.log(userRole.value ? userRole.value : false);
  console.log(userPassword.value === userConfirmPassword.value);
  console.log([...userSite].find((radioBtn) => radioBtn.checked).parentNode.innerText);
  console.log(urlFormat.test(userSiteAddress.value) ? userSiteAddress.value : false);
});
