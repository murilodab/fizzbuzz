//Get the values from the page
//controller

function getValues(){

    let fizzValue = document.getElementById("value1").value;

    let buzzValue = document.getElementById("value2").value;

    //Converting to int
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //validating
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){

        //call FizzBuzz
        let fbData = FizzBuzz2(fizzValue, buzzValue);

        //call displayNumbers
        displayData(fbData);
    }else{

        alert("You must enter Integers!");
    }

}

//Generate numbers
//logic
//classic if/else FizzBuzz
function FizzBuzz(fizzValue, buzzValue){

    let returnArray=[];

    for (let index = 1; index <= 100; index++) {
        
        if(index % fizzValue == 0 && index % buzzValue ==0){

            returnArray.push("FizzBuzz");

        }else if(index % fizzValue == 0){
           
            returnArray.push("Fizz");

        }else if(index % buzzValue == 0){
            
            returnArray.push("Buzz");

        }else{

            returnArray.push(index);
        }
        
    }

    return returnArray;
        
    }

    //FizzBuzz with ternary operator

    function FizzBuzz2(fizzValue, buzzValue){

        let returnArray = [];

        for (let i = 1; i <= 100; i++){

            let value = ((i % fizzValue == 0 ? 'Fizz' : '') + (i % buzzValue == 0 ? 'Buzz': '') || i );

                returnArray.push(value);
            }

return returnArray;

        }



//Display numbers
//view
function displayData(fbData){

    //get the table body element from the page
    let tableBody = document.getElementById("results");

    //get the template itself

    let templateRow = document.getElementById("fbTemplate");


    //clear the table first
    tableBody.innerHTML= "";

    for (let i = 0; i < fbData.length; i+=5) {

        let tableRow = document.importNode(templateRow.content, true);
        
        //grab use the td's to put into array

        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].classList.add(fbData[i]);
        rowCols[0].textContent = fbData[i];

        rowCols[1].classList.add(fbData[i+1]);
        rowCols[1].textContent = fbData[i+1];

        rowCols[2].classList.add(fbData[i+2]);
        rowCols[2].textContent = fbData[i+2];

        rowCols[3].classList.add(fbData[i+3]);
        rowCols[3].textContent = fbData[i+3];

        rowCols[4].classList.add(fbData[i+4]);
        rowCols[4].textContent = fbData[i+4];

        tableBody.appendChild(tableRow);
    }
}