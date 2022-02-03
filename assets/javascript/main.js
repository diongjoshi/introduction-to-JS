function show(){

    //Request a user’s name and display the response “Hello, [name]”
    const name = document.getElementById('name').value;
    document.getElementById('display').innerHTML = 'Hello, '+name;


    //Request a user’s year of birth, count his age, and display the result. Store the current year as a constant. 
    const currentYear = 2022;
    const year = parseInt(document.getElementById('year').value);
    const age = currentYear - year;
    document.getElementById('yourAge').innerHTML = 'You are '+age+' years old';


    //Request a length of a side of a square from a user and display the perimeter of the square. 
    const length = parseInt(document.getElementById('length').value);
    const perimeter = 4 * length;
    document.getElementById('yourPerimeter').innerHTML = 'The perimeter of the square is: '+perimeter+'cm';


    //Request a radius of a circle and display the area of such a circle. 
    const radius = parseInt(document.getElementById('radius').value);
    const theAreaCircle = 3.14 * Math.pow(radius,2);
    document.getElementById('circleArea').innerHTML = 'The area of the circle is: '+theAreaCircle;


    //Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.
    const distance = parseInt(document.getElementById('distance').value);
    const time = parseInt(document.getElementById('time').value);
    const speed = Math.floor(distance/(time/60));
    document.getElementById('calculatedSpeed').innerHTML = 'You have to drive '+speed+' Km/h.';


    //Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.
    const USDtoEUR = parseInt(document.getElementById('USDtoEUR').value);
    const convertedInEUR = 0.89 * USDtoEUR;
    document.getElementById('usdConverted').innerHTML = 'Your amount in EUR '+convertedInEUR;


    //A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive. 
    const GBmemory = parseInt(document.getElementById('GBmemory').value);
    const file = 820;
    const amountOFfiles = Math.floor((GBmemory * 1000) / file);
    document.getElementById('stored').innerHTML = 'You are able to store '+amountOFfiles+ ' files';


    //A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left. 
    const yourWallet = parseInt(document.getElementById('yourWallet').value);
    const chocolateBar = parseInt(document.getElementById('chocolateBar').value);
    const chocolateAmount = parseInt(yourWallet / chocolateBar);
    const change = yourWallet - chocolateAmount * chocolateBar;
    document.getElementById('sumofChocolate').innerHTML = 'You can buy '+chocolateAmount+' chocolates.';
    document.getElementById('theChange').innerHTML = 'Your change is '+change;

    
    //The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest.
    const deposits = parseInt(document.getElementById('deposits').value);
    const months = parseInt(document.getElementById('months').value);
    const interes = parseInt(document.getElementById('interes').value);
    const calculateInteres = (interes/100) / 12;
    const fee = deposits * calculateInteres * months;
    document.getElementById('fee').innerHTML = 'Your fee is ' +fee;

}