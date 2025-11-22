const CORRECT_CODE = "8576";

const inputs = Array.from(document.querySelectorAll('.digit'));
const message = document.getElementById('message');
const check_button = document.getElementById('check');
const clear_button = document.getElementById('clear');

inputs.forEach((el, i) => {
    el.addEventListener('input', (e) => {
        const val = el.value.replace(/[^0-9]/g,'');
        el.value = val;
        if (val && i < inputs.length-1) inputs[i+1].focus();
    });
    el.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !el.value && i > 0) {
            inputs[i-1].focus();
        }
        if (e.key === 'Enter') {
            check_code();
        }
    });
});

function get_entered_code() {
    return inputs.map(i => i.value || ' ').join('');
}

function check_code() {
    const code = inputs.map(i => i.value || '0').join('');
    if (code.length !== 4) {
        message.textContent = 'Vul alle 4 cijfers in.';
        return;
    }
    if (code === CORRECT_CODE) {
        message.textContent = 'Goed gedaan! Het cadeau is aangekomen.';
        message.style.color = 'green';
        // succes: laat niets anders zien. De echte verrassing ligt in de doos!
    } else {
        message.textContent = 'Helaas, dat is niet correct. Probeer opnieuw.';
        message.style.color = '#b8323a';
    }
}

function clear_inputs() {
    inputs.forEach(i => i.value = '');
    inputs[0].focus();
    message.textContent='';
}

check_button.addEventListener('click', check_code);
clear_button.addEventListener('click', clear_inputs);

// focus eerste input bij load
window.addEventListener('load', ()=>{
    inputs[0].focus();
});
