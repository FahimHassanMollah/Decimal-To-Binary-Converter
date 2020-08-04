document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    let inputNumber=document.getElementById('number').value;
    let inputNumberString=document.getElementById('number').value;
    inputNumber=Number.parseFloat(inputNumber);
    if (inputNumber<0) {
        document.getElementById('number').value='';
        document.getElementById('result').innerText=""
        alert('please enter a valid number')
    }
    else if (inputNumberString==='') {
        alert('please enter a  number')
    }
    else {
        document.getElementById('result').style.visibility='visible';
        document.getElementById('result').innerText=inputNumber.toString('2');
    }
   
    
});