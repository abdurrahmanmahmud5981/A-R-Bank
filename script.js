// console.log("Hello, World!");
// search : form submit reloading the page

/**
 * step-1 set event handler
 * step- Prevent default beha
 * 
 */
document.getElementById('btn-login').addEventListener('click', (e) => {
    e.preventDefault()
    
    const phone =  document.getElementById('phone-number').value;
    console.log(phone);
})