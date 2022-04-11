const displayDiv = document.getElementById('display');
const calcArray = [];

document.addEventListener('click', (e) => {
        if(e.target.nodeName == 'BUTTON'){
        console.log(e.target.id, e.target.className);
        if(e.target.className === 'clear') {
            clearArr();
            displayDiv.textContent = '';
        }
        switch (calcArray.length){

            case 0: 
                if (e.target.className === 'digit' || e.target.className === 'dot'){
                    updateScreen(`${e.target.id}`);
                    calcArray[0] = `${e.target.id}`;
                }
                break;

            case 1:
                if (e.target.className === 'digit' || e.target.className === 'dot'){
                    updateScreen(`${e.target.id}`);
                    calcArray[0] += `${e.target.id}`;
                } else if(e.target.className === 'operation'){
                    calcArray[1] = `${e.target.id}`;
                }
                break;
            
            case 2:
                if (e.target.className === 'digit' || e.target.className === 'dot'){
                    clearScreen();
                    updateScreen(`${e.target.id}`);
                    calcArray[2] = `${e.target.id}`;
                }
                break;

            case 3:
                if (e.target.className === 'digit' || e.target.className === 'dot'){
                    updateScreen(`${e.target.id}`);
                    calcArray[2] += `${e.target.id}`;
                } else if(e.target.className === 'operation'){
                    calcArray[0] = window[calcArray[1]](calcArray);
                    calcArray[1] = `${e.target.id}`;
                    calcArray.splice(2,1);
                    displayDiv.textContent = calcArray[0];
                } else if (e.target.className === 'equal'){
                    calcArray[0] = window[calcArray[1]](calcArray);
                    calcArray.splice(1,2);
                    displayDiv.textContent = calcArray[0];
                }
                break;

        }
    }
})

function clearArr(){
    calcArray.splice(0,calcArray.length);
}

function clearScreen(){
    displayDiv.textContent = '';
}

function add(calcArray){
    return (calcArray[0] * 1) + (calcArray[2] *1);
}

function subtract(calcArray){
    return calcArray[0] - calcArray[2];
}

function multiply(calcArray){
    return calcArray[0] * calcArray[2];
}

function divide(calcArray){
    return calcArray[0] / calcArray[2];
}

function updateScreen(value){
    if(displayDiv.textContent.length === 0){
        displayDiv.textContent = value;
        return;
    } else if (value === '.' && displayDiv.textContent.includes('.')){
        return;
    } else {
        displayDiv.textContent += value;
        return;
    }
}

