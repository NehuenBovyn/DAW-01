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
            errorSpan.textContent = 'Debe contener al menos 6 caracteres y un espacio.';
        }
    }

    function validateField(event) {
        var field = event.target.name;
        var value = event.target.value;
        var errorSpan = document.getElementById('error-' + field);

        switch(field) {
            case 'email':
                if (!/\S+@\S+\.\S+/.test(value)) {
                    errorSpan.textContent = 'Email inválido.';
                }
                break;
            case 'password':
                if (value.length < 8 || !/\d/.test(value)) {
                    errorSpan.textContent = 'La contraseña debe tener al menos 8 caracteres y contener números.';
                }
                break;
            case 'age':
                if (isNaN(value) || value % 1 !== 0 || value <= 18) {
                    errorSpan.textContent = 'Debe ser un número entero mayor o igual a 18.';
                }
                break;
            case 'phone':
                if (!/^\d{7,}$/.test(value)) {
                    errorSpan.textContent = 'Debe contener al menos 7 dígitos.';
                }
                break;
            case 'address':
                if (value.length < 5 || !/\s/.test(value)) {
                    errorSpan.textContent = 'Debe contener al menos 5 caracteres y un espacio.';
                }
                break;
            case 'city':
                if (value.length < 3) {
                    errorSpan.textContent = 'Debe contener al menos 3 caracteres.';
                }
                break;
            case 'postal-code':
                if (value.length < 3) {
                    errorSpan.textContent = 'Debe contener al menos 3 caracteres.';
                }
                break;
            case 'dni':
                if (!/^\d{7,8}$/.test(value)) {
                    errorSpan.textContent = 'DNI debe tener entre 7 y 8 dígitos.';
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
            console.error('Corrija los errores del formulario.');
        } else {
            var formData = new FormData(form);
            var data = {};
            formData.forEach(function(value, key) {
                data[key] = value;
            });

            var url = 'https://jsonplaceholder.typicode.com/users'; // URL de ejemplo
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(responseData => {
                showModal('Suscripción exitosa', responseData);
                saveToLocalStorage(responseData);
            })
            .catch(error => {
                console.error('Error:', error);
                showModal('Error en la suscripción');
            });
        }
    }

    function showModal(message, data) {
        var modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>${message}</p>
                ${data ? '<pre>' + JSON.stringify(data, null, 2) + '</pre>' : ''}
            </div>
        `;
        document.body.appendChild(modal);

        var closeButton = modal.querySelector('.close');
        closeButton.addEventListener('click', function() {
            modal.remove();
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.remove();
            }
        });
    }

    function saveToLocalStorage(data) {
        localStorage.setItem('subscriptionData', JSON.stringify(data));
    }

    function loadFromLocalStorage() {
        var savedData = localStorage.getItem('subscriptionData');
        if (savedData) {
            savedData = JSON.parse(savedData);
            for (var key in savedData) {
                if (savedData.hasOwnProperty(key)) {
                    var input = document.querySelector('[name=' + key + ']');
                    if (input) {
                        input.value = savedData[key];
                    }
                }
            }
        }
    }

    loadFromLocalStorage();
};
