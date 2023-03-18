function validateLoginForm() {
    let userValue = document.querySelector('#input_username').value; // $('#input_username').val()
    let passValue = document.getElementById('input_password').value; // $('#input_password').val()
    // console.log('Username: ' + userValue);
    // console.log('Password: ' + passValue);

    let errorMsg = '';

    if (userValue === null || userValue === '') {
        // Daca valoarea "username" este null sau empty string    
        errorMsg = 'Introdu username!<br/>' ;
    }
    if (passValue === null || passValue === '') {
        // Daca valoarea "parolei" este null sau empty string    
        errorMsg = errorMsg + 'Introdu password!';
    } else if (passValue.length < 8 ) {
        errorMsg += 'Parola trebuie sa fie din minim 8 caractere!';
    }
    
    console.log(errorMsg);

    // document.getElementById('error_login').innerText = errorMsg;
    document.getElementById('error_login').innerHTML = `<u>${errorMsg}</u>`;
}

// JQUERY 
$(document).ready(function(){
    // Cand documentul este incarcat 

    // Selectam toate elementele din DOM care au clasa "form-control" 
    // iar la eventul de input pe unul dintre ele 
    $('.form-control').on('input', function(e){
        // golim elementul cu id ul "error_login"
        $('#error_login').empty();
    });
});