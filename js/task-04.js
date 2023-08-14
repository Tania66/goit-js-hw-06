
const refs = {
    decrement: document.querySelector('#counter button[ data-action ="decrement"]'),
    value: document.querySelector('#value'),
    increment: document.querySelector('#counter button[ data-action ="increment"]'),
    }
    
    
    const counterValue = refs.value;
    refs.value = 0;
    
    
    refs.decrement.addEventListener('click', onDecrementClick);
    
    function onDecrementClick(){
    refs.value -= 1;
    counterValue.textContent = refs.value;
       console.log(counterValue);
    }
    
    
    refs.increment.addEventListener('click',onIncrementClick )
    
    function onIncrementClick(){
    refs.value += 1; 
    counterValue.textContent = refs.value;
    console.log(counterValue);
    }
    