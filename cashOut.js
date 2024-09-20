/**
 * 
 */

// document.getElementById('btn-cash-out').addEventListener('click', (e) => {
//     // prevent default behaviour
//     e.preventDefault();

//     // step 2
//     const cashOutInput = document.getElementById('input-cash-out').value;
//     const cashOutPinInput = document.getElementById('input-cash-out-pin').value;

//     // step 3 validation
//     if(cashOutPinInput === '1234'){
//         // step -4 get the current balance
//         const currentBalance = document.getElementById('current-balance').innerText;

//         // step 5 subtruct new balance from current balance
//         // reduce the balance
//         const newBalance = parseFloat(currentBalance) - parseFloat(cashOutInput);


//         // step 6 update the balance
//         document.getElementById('current-balance').innerText = newBalance;

//         // step 7 clear the input field
//         // document.getElementById('input-cash-out').value = '';
//         // document.getElementById('input-cash-out-pin').value = '';
//     }else{
//         alert('failed to Cash Out  ! Please try again');
//     }
// })
 document.getElementById('btn-cash-out').addEventListener('click',(e)=>{
    e.preventDefault();
    const cashOut = getInputValueById('input-cash-out');
    const pinNumber = getInputValueById('input-cash-out-pin');
   if(isNaN(cashOut)){
    alert('failed to Cash out')
    return;
   }
    // wrong way to verify.
    if(pinNumber === 1234){
        const currentBalance = getTextValue('current-balance');
        if( cashOut > currentBalance){
            alert ('you do not have enough money to cash out')
            return;
        }
        const newBalance = currentBalance - cashOut;
        document.getElementById('current-balance').innerText = newBalance;

        // clear the input field 
        document.getElementById('input-cash-out').value = '';
        document.getElementById('input-cash-out-pin').value = '';
    }else{
        alert('No Money For You!.... DGM')
    }
 })
