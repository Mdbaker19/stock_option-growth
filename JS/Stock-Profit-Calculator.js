(function (){
    "use strict";

    function positionValue(x, y){
        return x * y;
    }

    //---------STOCK INPUT INFO----------//
    let stockTicker = document.getElementById("ticker");
    let sharePrice = document.getElementById("boughtPrice");
    let shareTgt = document.getElementById("targetPrice");
    let shareAmt = document.getElementById("shareQuantity");
    let shareCalc = document.getElementById("submitStockData");

    //---------STOCK TABLE INFO----------//
    let showStockTicker = document.getElementById("stockName");
    let showStockPrice = document.getElementById("stockCurrentPrice");
    let showStockTarget = document.getElementById("stockTargetPrice");
    let showStockValue = document.getElementById("stockValue");
    let stockGainLoss = document.getElementById("stock-gain-loss");
    let stockBreakdown = document.getElementById("hideStockScreen");



    shareCalc.addEventListener("click", function (){
        let sharePriceNum = sharePrice.value;
        let shareQuantityNum =  shareAmt.value;

        stockBreakdown.style.display = "block";
        showStockTarget.innerText = shareTgt.value;
        showStockTicker.innerText = stockTicker.value.toUpperCase(); // referenced from some data base to turn tsla => tesla, amzn => amazon
        showStockPrice.innerText = "amount from data base here";
        showStockValue.innerText = positionValue(sharePriceNum, shareQuantityNum);
        stockGainLoss.innerText = "need data to calc this"
    });

    stockBreakdown.addEventListener("click", function(){
        stockBreakdown.style.display = "none";
        //have some sort of screen appear over everything to show an in depth break down chart of price
    });






    //-----------OPTION INPUT INFO--------//
    let optionTicker = document.getElementById("optionTicker");
    let optionPrice = document.getElementById("optionPrice");
    let optionTgt = document.getElementById("goalPrice");
    let optionAmt = document.getElementById("contractAmount");
    let optionCalc = document.getElementById("submitOptionData");

    //-----------OPTION TABLE INFO--------//
    let showOptionTicker = document.getElementById("stockNameOption");
    let showOptionPrice = document.getElementById("optionCurrentPrice");
    let showOptionTarget = document.getElementById("optionTargetPrice");
    let showOptionValue = document.getElementById("optionValue");
    let optionGainLoss = document.getElementById("option-gain-loss");
    let optionBreakdown = document.getElementById("hideOptionScreen");

    optionCalc.addEventListener("click", function(){
        let optionPriceNum = optionPrice.value;
        let optionQuantityNum = optionAmt.value;

        optionBreakdown.style.display = "block";
        showOptionTicker.innerText = optionTicker.value.toUpperCase();// same reference
        showOptionPrice.innerText = "amount from data base here";
        optionGainLoss.innerText = "need data to calc this";
        showOptionTarget.innerText = optionTgt.value;
        showOptionValue.innerText = positionValue(optionPriceNum, optionQuantityNum);
    });

    optionBreakdown.addEventListener("click", function(){
       optionBreakdown.style.display = "none";
        //have some sort of screen appear over everything to show an in depth break down chart of price
    });

})();