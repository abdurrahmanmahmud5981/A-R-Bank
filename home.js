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
    if(pinNumber === '1234'){
        console.log('you can add money');
        // step -4 get the current balance
        const currentBalance = document.getElementById('current-balance').innerText;

        // step 5 add new balance with current balance
        const newBalance = parseFloat(currentBalance) + parseFloat(addMoneyInput);

        // step 6 update the balance
        document.getElementById('current-balance').innerText = newBalance;

        // step 7 clear the input field
        document.getElementById('input-add-money').value = '';
        document.getElementById('input-pin-number').value = '';
    }else{
        alert('failed to add money ! Please try again');
    }

})