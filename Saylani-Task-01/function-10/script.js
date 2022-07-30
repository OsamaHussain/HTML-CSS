// Variables
let dataField = document.querySelector('#data');
let submitBtn = document.querySelector('#submit');
let outputField = document.querySelector('#output');

// Function & Event Listner
submitBtn.addEventListener('click', ()=>{
    let outputValue = [];
    let input = dataField.value.split(",").sort();
    if (dataField.value !== '') {
        outputValue.push(input[1]);
        outputValue.push(input[input.length-2]);
    }else {
        outputValue = "Please Enter Some Value";
    }
    outputField.children[0].innerText = outputValue;
});