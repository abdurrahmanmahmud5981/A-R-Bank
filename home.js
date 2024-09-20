/**
 * step-1 set event handler
 * step- Prevent default behaviour
 * step 2 get money to be added to the account
 */


// add money to the account
document.getElementById('btn-add-money').addEventListener('click',(e)=>{
    // prevent default behaviour
    e.preventDefault();
    // step 2
    const addMoneyInput = document.getElementById('input-add-money').value;

    // get the pin number
    const pinNumber = document.getElementById('input-pin-number').value;

    // step 3 validation
    

})