// console.log("Hello, World!");
// search : form submit reloading the page

/**
 * step-1 set event handler
 * step- Prevent default beha
 * 
 */
document.getElementById('btn-login').addEventListener('click', (e) => {
    // step 2
    e.preventDefault()
    // step -3 phone and pin number
    const phone =  document.getElementById('phone-number').value;
    const pin =  document.getElementById('pin-number').value;

    // step 4 validation
    // this is temporary .
    if(phone === '5' && pin === '1234'){
        // step 5 => allow user to access and redirect to home page
        window.location.href = './home.html';
    }else{
        alert('wrong phone or pin ');
    }
})