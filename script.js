// Config: zet hier de standaard 4-cijferige code
const DEFAULT_CODE = "1234";

function readCodeFromQuery(){
  try{
    const params = new URLSearchParams(window.location.search);
    const c = params.get('code');
    if(c && /^\d{4}$/.test(c)) return c;
  }catch(e){}
  return null;
}

const CORRECT_CODE = readCodeFromQuery() || DEFAULT_CODE;

const inputs = Array.from(document.querySelectorAll('.digit'));
const message = document.getElementById('message');
const checkBtn = document.getElementById('check');
const clearBtn = document.getElementById('clear');

inputs.forEach((el, i) => {
  el.addEventListener('input', (e)=>{
    const val = el.value.replace(/[^0-9]/g,'');
    el.value = val;
    if(val && i < inputs.length-1) inputs[i+1].focus();
  });
  el.addEventListener('keydown', (e)=>{
    if(e.key === 'Backspace' && !el.value && i>0){
      inputs[i-1].focus();
    }
    if(e.key === 'Enter'){
      checkCode();
    }
  });
});

function getEnteredCode(){
  return inputs.map(i=>i.value || ' ').join('');
}

function checkCode(){
  const code = inputs.map(i=>i.value || '0').join('');
  if(code.length !== 4){
    message.textContent = 'Vul alle 4 cijfers in.';
    return;
  }
  if(code === CORRECT_CODE){
    message.textContent = 'Goed gedaan!';
    message.style.color = 'green';
    // succes: laat niets anders zien — de echte verrassing ligt in de doos
  } else {
    message.textContent = 'Helaas, dat is niet correct. Probeer opnieuw.';
    message.style.color = '#b8323a';
  }
}

function clearInputs(){
  inputs.forEach(i=>i.value='');
  inputs[0].focus();
  message.textContent='';
}

checkBtn.addEventListener('click', checkCode);
clearBtn.addEventListener('click', clearInputs);

// focus eerste input bij load
window.addEventListener('load', ()=>{
  inputs[0].focus();
});
