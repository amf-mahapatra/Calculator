/* Storing items and updating global array variable */
const my_array = [];

function add_to_array() {
    my_array[0] = 'zero';
    my_array[1] = 'one';
}

function printArr(){
    console.log(my_array);
}

function clearArr(){
    my_array.splice(0,2);
}

/* Calling function from event listener */
document.addEventListener('click', (e) => {
    let trgId = `${e.target.id}`;

    if (trgId == 'rock' || trgId == 'paper' || trgId == 'scissors'){
        playRPS_Round(trgId);
    }
})