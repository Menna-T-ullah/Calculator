let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');
let string = "";
let array=Array.from(buttons);
array.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML =='Clear'){
            string = "";
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string; 
        }
    });
});