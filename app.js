var initialStockPrice = document.querySelector("#stock-price-ini")
var noOfStocks = document.querySelector("#no-of-stocks")
var finalStockPrice = document.querySelector("#stock-price-fin")
var btnCheck = document.querySelector("#btn-check")
var output = document.querySelector(".output")


btnCheck.addEventListener("click",()=>{
    var msg = "";
    output.innerHTML = ""
    output.style.display = "block";
    
    //checking the empty cases 
    if(!initialStockPrice.value)
    {
        msg = "Please enter the Initial Stock Price";
         output.innerHTML = msg;
        return;
    }
    else if(parseInt(initialStockPrice.value) < 0)
    {
        
        msg = "Initial Stock price cannot be negative";
         output.innerHTML = msg;
        return;
    }
    else if(!noOfStocks.value)
    {
        msg = "Please enter the Number of Stocks Purchased";
         output.innerHTML = msg;
        return;
    }
    else if(parseInt(noOfStocks.value) <= 0)
    {
         
        msg = "Number of Stocks brought cannot be negative";
         output.innerHTML = msg;
        return;
    }
    else if(!finalStockPrice.value)
    {
        msg = "Please enter the Final Stock Price";
         output.innerHTML = msg;
        return;
    }
    else if(parseInt(finalStockPrice.value) < 0)
    {
        msg = "Final Stock price cannot be negative";
         output.innerHTML = msg;
        return;
    }
    output.innerHTML = msg;
    var delta = Math.abs((initialStockPrice.value*noOfStocks.value) - (finalStockPrice.value*noOfStocks.value));
    
    if(parseInt(delta) == 0)
    {
        msg = "Your investment did not make any Profit/Loss.<br>"
        msg += "Better Luck Next time!"
        output.innerHTML = msg;
        return;
    }
    
   

    var perc = Math.abs((delta/(initialStockPrice.value*noOfStocks.value))*100);

    
    
    if(parseInt(initialStockPrice.value)>parseInt(finalStockPrice.value))
    {
        // it is a loss
        msg = "Sorry to break it to you.But you made a bad investment.<br>"
        msg+= "You lost "+perc+"% of your initial investment which is "+delta+"$<br>"
       
    }
    else{

        msg = "Yay.We are happy that you are able to make a good investment.<br>";
        msg += "Your stock made a growth of "+perc+"% which makes you exactly "+delta+"$ richer<br>"
        
    }
    output.innerHTML = msg;
})