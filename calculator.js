const displayDiv = document.getElementById('display');
const calcArray = [];

document.addEventListener('click', (e) => {
        if(e.target.nodeName == 'BUTTON'){
        console.log(e.target.id);
    }
})

function clearArr(){
    calcArray.splice(0,2);
}

function add(calcArray){
    return calcArray[0] + calcArray[2];
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

