window.onload = function() {
  var form = document.getElementById('subscription-form');
  var formTitle = document.getElementById('form-title');
  var fullNameInput = document.getElementById('full-name');

  fullNameInput.addEventListener('keydown', updateTitle);
  fullNameInput.addEventListener('focus', clearError);
  fullNameInput.addEventListener('blur', validateFullName);
  form.addEventListener('submit', handleSubmit);

  var fields = ['email', 'password', 'age', 'phone', 'address', 'city', 'postal-code', 'dni'];
  fields.forEach(function(field) {
      var input = document.getElementById(field);
      input.addEventListener('focus', clearError);
      input.addEventListener('blur', validateField);
  });

  function updateTitle() {
      formTitle.textContent = 'HOLA ' + fullNameInput.value;
  }

  function clearError(event) {
      var errorSpan = document.getElementById('error-' + event.target.name);
      errorSpan.textContent = '';
  }

  function validateFullName() {
      var fullName = fullNameInput.value;
      var errorSpan = document.getElementById('error-full-name');
      if (fullName.length < 6 || !fullName.includes(' ')) {
          errorSpan.textContent = 'Debe contener 6 caracteres y un espacio.';
      }
  }

  function validateField(event) {
      var field = event.target.name;
      var value = event.target.value;
      var errorSpan = document.getElementById('error-' + field);

      switch(field) {
          case 'email':
              if (!/\S+@\S+\.\S+/.test(value)) {
                  errorSpan.textContent = 'Email invalido.';
              }
              break;
          case 'password':
              if (value.length < 8 || !/\d/.test(value)) {
                  errorSpan.textContent = 'La contraseña tiene que tener 8 caracteres y contener números.';
              }
              break;
          case 'age':
                  if (isNaN(value) || value % 1 !== 0 || value <= 18) {
                    errorSpan.textContent = 'Debe ser un número entero mayor o igual a 18.';
                  }
                  break;
          case 'phone':
              if (!/^\d{7,}$/.test(value)) {
                  errorSpan.textContent = 'Tiene que contener mínimo 7 dígitos.';
              }
              break;
          case 'address':
              if (value.length < 5 || !/\s/.test(value)) {
                  errorSpan.textContent = 'Tiene que contener mínimo 5 caracteres y un espacio.';
              }
              break;
          case 'city':
              if (value.length < 3) {
                  errorSpan.textContent = 'Tiene que contener mínimo 3 caracteres.';
              }
              break;
          case 'postal-code':
              if (value.length < 3) {
                  errorSpan.textContent = 'Tiene que contener mínimo 3 caracteres.';
              }
              break;
          case 'dni':
              if (!/^\d{7,8}$/.test(value)) {
                  errorSpan.textContent = 'DNI entre 7 u 8 dígitos.';
              }
              break;
      }
  }

  function handleSubmit(event) {
      event.preventDefault();
      var errors = document.querySelectorAll('.error-message');
      var hasError = false;
      errors.forEach(function(error) {
          if (error.textContent !== '') {
              hasError = true;
          }
      });

      if (hasError) {
          alert('Please fix the errors in the form.');
      } else {
          var formData = new FormData(form);
          var data = {};
          formData.forEach(function(value, key) {
              data[key] = value;
          });
          alert('Form submitted successfully: ' + JSON.stringify(data));
      }
  }
};
