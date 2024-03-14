const form = document.getElementById("form");
const total_price = document.getElementById("total_price");
const down_payment = document.getElementById("down_payment");
const loan_lenght = document.getElementById("loan_lenght");
const annual_rate = document.getElementById("annual_rate");

var total_price_check = "false";
var loan_lenght_check = "false";
var annual_rate_check = "false";


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    if(total_price.value === ''){

        setError(total_price, "Total Price cannot be blank")
    }
    else{
        total_price_check = "true";
        setSuccess(total_price);
    }

    if(down_payment.value === ''){

        down_payment == "0";
    }
    else{
        setSuccess(down_payment);
    }

    if(loan_lenght.value === ''){

        setError(loan_lenght, "Loan lenght cannot be blank")
    }
    else{
        loan_lenght_check = "true";
        setSuccess(loan_lenght);
    }

    if(annual_rate.value === ''){

        setError(annual_rate, "Annual rate cannot be blank")
    }
    else{
        annual_rate_check = "true";
        setSuccess(annual_rate);
    }

    if(total_price_check === "true" && loan_lenght_check === "true" && annual_rate_check === "true"){
        math(total_price.value, down_payment.value, loan_lenght.value, annual_rate.value)
    }
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    
}

function math(totalPrice, downPayment, loanLenght, annualRate){ 

    let totalLoan = totalPrice - downPayment;
    document.getElementById("total_loan_result").innerText = totalLoan;

    let totalInterest = ((totalLoan / 100) * (annualRate / 12)) * loanLenght;
    document.getElementById("total_interest_result").innerText = totalInterest;

    let totalPaid = totalLoan + totalInterest;
    document.getElementById("total_paid_result").innerText = totalPaid;

    let monthlyPayment = totalPaid / loanLenght;
    
    document.getElementById("monthly_payment_result").innerText = monthlyPayment.toFixed(2) ;
}

