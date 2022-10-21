console.log("We are inside the index.js");

let screen = document.getElementById('screen');
// console.log(screen);


let buttons = document.querySelectorAll('button');
// console.log(buttons);
let screenValue = "";

for(let item of buttons){
    // console.log(item);
    
    item.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;
        // console.log(buttonText);
        if(buttonText === 'X'){
            screenValue += '*';
            screen.value = screenValue;
        }
        else if(buttonText === '='){
            let val = eval(screenValue);
            screen.value = val;
        }
        else if(buttonText === 'c'){
            screenValue = "";
            screen.value = "";
        }
        else if(buttonText === 'Back'){
            let s = screenValue.length;
            screenValue = screenValue.substring(0, s-1);
            screen.value = screenValue;
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

