var initialStockPrice = document.querySelector("#stock-price-ini")
var noOfStocks = document.querySelector("#no-of-stocks")
var finalStockPrice = document.querySelector("#stock-price-fin")
var btnCheck = document.querySelector("#btn-check")
var output = document.querySelector(".output")


btnCheck.addEventListener("click",()=>{
    var delta = Math.abs((initialStockPrice.value*noOfStocks.value) - (finalStockPrice.value*noOfStocks.value));
    console.log(initialStockPrice.value,noOfStocks.value,finalStockPrice.value)
    console.log(initialStockPrice.value)
    console.log(finalStockPrice.value)
    console.log()

    var perc = ((delta/(initialStockPrice.value*noOfStocks.value))*100);

    var msg = "";
    if(parseInt(initialStockPrice.value)>parseInt(finalStockPrice.value))
    {
        // it is a loss
        msg = "Sorry to break it to you.But you made a bad investment."
        msg+= "You lost "+perc+"% of your initial investment which is "+delta+"$"
        msg += " Stop investing in doge coin you punk"
    }
    else{

        msg = "Yay.We are happy that you are able to make a good investment.";
        msg += "Your stock made a growth of "+perc+"% which makes you exactly "+delta+"$ richer"
        msg += "You go on ma boy"
    }
    output.innerHTML = msg;
})