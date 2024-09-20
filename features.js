// show the cash out form 
document.getElementById('btn-show-cash-out').addEventListener('click', (e) => {
    // prevent default behaviour
    e.preventDefault();
    // step 2
    const cashOutForm = document.getElementById('cash-out-form');
    const addMoneyForm = document.getElementById('add-money-form');
    // step 3
    cashOutForm.classList.remove('hidden');
    addMoneyForm.classList.add('hidden');
    document.getElementById('btn-show-add-money').classList.remove('btn-active');
    document.getElementById('btn-show-cash-out').classList.add('btn-active');
})

// show the add money form and hide the cash out form 
document.getElementById('btn-show-add-money').addEventListener('click', (e) => {
    // prevent default behaviour
    e.preventDefault();
    // step 2
    const cashOutForm = document.getElementById('cash-out-form');
    const addMoneyForm = document.getElementById('add-money-form');
    // step 3
    cashOutForm.classList.add('hidden');
    addMoneyForm.classList.remove('hidden');
    document.getElementById('btn-show-add-money').classList.add('btn-active');
    document.getElementById('btn-show-cash-out').classList.remove('btn-active');

})