//
document.getElementById('btn-add-money').addEventListener('click',(e)=>{
    e.preventDefault()
    const addMoney = getInputValueById('input-add-money');
    const pinNumber = getInputValueById('input-pin-number');
    if(isNaN(addMoney)){
        alert('failed to Add Money')
        return;
       }
    // wrong way to verify.
    if(pinNumber === 1234){
        const currentBalance = getTextValue('current-balance');
        const newBalance = currentBalance + addMoney;
        document.getElementById('current-balance').innerText = newBalance;

           //  clear the input field
        document.getElementById('input-add-money').value = '';
        document.getElementById('input-pin-number').value = '';
    }else{
        alert('Failed to add money!')
    }
})