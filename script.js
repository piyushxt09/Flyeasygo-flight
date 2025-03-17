function toggleDropdown() {
    let dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('destination').value = this.textContent;
        document.getElementById('dropdown').style.display = 'none';
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.form-home')) {
        document.getElementById('dropdown').style.display = 'none';
    }
});


function toggleDropdownCountry() {
    let dropdown_country = document.getElementById('dropdown-country');
    dropdown_country.style.display = dropdown_country.style.display === 'block' ? 'none' : 'block';
}

document.querySelectorAll('.dropdown-item2').forEach(item => {
    item.addEventListener('click', function() {
        document.getElementById('Country').value = this.textContent;
        document.getElementById('dropdown-country').style.display = 'none';
    });
});

document.addEventListener('click', function(event) {
    if (!event.target.closest('.form-home')) {
        document.getElementById('dropdown-country').style.display = 'none';
    }
});





// ------------login page-------------------

document.getElementById('fa-eye-slash').addEventListener('click', function() {
    let passwordInput = document.querySelector('input[type="password"]');
    if (passwordInput) {
        passwordInput.type = 'text';
        document.getElementById('fa-eye-slash').style.display = 'none';
        document.getElementById('fa-eye').style.display = 'inline';
    }
});

document.getElementById('fa-eye').addEventListener('click', function() {
    let passwordInput = document.querySelector('input[type="text"]');
    if (passwordInput) {
        passwordInput.type = 'password';
        document.getElementById('fa-eye').style.display = 'none';
        document.getElementById('fa-eye-slash').style.display = 'inline';
    }
});

document.getElementById('fa-eye-slash2').addEventListener('click', function() {
    let passwordInput = document.querySelector('input[type="password"]');
    if (passwordInput) {
        passwordInput.type = 'text';
        document.getElementById('fa-eye-slash').style.display = 'none';
        document.getElementById('fa-eye').style.display = 'inline';
    }
});

document.getElementById('fa-eye2').addEventListener('click', function() {
    let passwordInput = document.querySelector('input[type="text"]');
    if (passwordInput) {
        passwordInput.type = 'password';
        document.getElementById('fa-eye').style.display = 'none';
        document.getElementById('fa-eye-slash').style.display = 'inline';
    }
});


