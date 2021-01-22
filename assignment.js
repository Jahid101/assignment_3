// https://github.com/Jahid101/assignment_3


// Converter of kilometer to Meter.
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        console.log('invalid input');
    }
    else{
        let meter = kilometer * 1000;
        return meter;
    }
}

// let calculatekilometerToMeter = kilometerToMeter(7);
// console.log(calculatekilometerToMeter);



// Budget Calculator of Watch, Phone, Laptop.
function budgetCalculator(watch, phone, laptop){
    let totalbudget = 0;
    if(watch < 0 || phone < 0 || laptop <0){
        console.log('invalid input');
    }
    else{
        let watchValue = watch * 50;
        let phoneValue = phone * 100;
        let laptopValue = laptop * 500;
        let totalbudget = watchValue + phoneValue + laptopValue;
        return totalbudget;
    }
}

// let checkBudgetCalculator = budgetCalculator(7,7,7);
// console.log(checkBudgetCalculator);



// Calculator of Hotel cost.
function hotelCost(day){
    let totalCost = 0;
    if(day < 0){
        console.log('invalid input');
    }
    else if(day <= 10){
        totalCost = day * 100;
        return totalCost;
    }
    else if(day <= 20){
        let firstTenDays = 10 * 100;
        let remainingDays = day - 10;
        let secondTenDays = remainingDays * 80;
        totalCost = firstTenDays + secondTenDays;
        return totalCost;
    }
    else{
        let firstTenDays = 10 * 100;
        let secondTenDays = 10 * 80;
        let remainingDays = day - 20;
        let moreDays = remainingDays * 50;
        totalCost = firstTenDays + secondTenDays + moreDays;
        return totalCost;
    }
}

let getHoltelCost = hotelCost(27);
console.log(getHoltelCost);



// Finder of the largest name from Array.
function megaFriend(friendName){
    let larger = friendName[0];
    let checkArray = Array.isArray(friendName);
    if(checkArray != true){
        console.log('Invalid input');
    }
    else{
        for(let i = 0; i < friendName.length; i++){
            let element = friendName[i];
            if(element.length > larger.length){
               larger = element;
            }
        }
    }
    return larger;
}

// let array = ['Rahim', 'Karim', 'RishadLala', 'Arob', 'Dalwer'];
// let getMegaFriend = megaFriend(array);
// console.log(getMegaFriend);
