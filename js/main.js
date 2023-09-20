const promptText = 'Ваш месячный доход?';
const money = prompt(promptText);
console.log(money);



//let income ='freelance';
//console.log ( typeof 'income');
let promptText2 = 'Перечислите возможные расходы за рассчитываемый период через запятую';
let addExpenses = prompt(promptText2);
console.log(addExpenses);
//console.log (addExpenses.length);
//console.log (addExpenses.toLowerCase());
//console.log (addExpenses.split (', '));
let confirmText = 'Есть ли у вас депозит в банке?'
let deposit = confirm(confirmText);
console.log(deposit);

let promptText3 = 'Введите обязательную статью расходов?';
let expenses1 = prompt(promptText3);
console.log(expenses1);
let promptText4 = 'Введите обязательную статью расходов?';
let expenses2 = prompt(promptText4);
console.log(expenses2);
let promptText5 = 'Во сколько это обойдется?';
let amount1 = prompt(promptText5);
console.log(amount1);
let promptText6 = 'Во сколько это обойдется?';
let amount2 = prompt(promptText6);
console.log(amount2);

let budgetMonth = money - (amount1 + amount2);
console.log('Бюджет на месяц: ', budgetMonth);
let budgetMonth1 = +money - (+amount1 + +amount2);

let mission =  1000000000;
console.log(`Цель будет достигнута за: ${Math.ceil (mission/budgetMonth)} месяцев`);
//const missionString = `цель заработать ${mission} долларов`;
//console.log (missionString); 
let budgetDay = budgetMonth / 30;
console.log('Бюджет на день: ', Math.floor(budgetDay));

if (budgetDay > 1200) {
    console.log('у вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay < 1200 ) {
    console.log('у вас средний уровень дохода');
} else if (budgetDay < 600) {
    console.log('к сожалению уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log('что то  пошло не так')
};

//let period =12;
//const periodString = `период равен ${period}`; 
//console.log(periodString);




//let budgetDay =3333;
//console.log (budgetDay);


//усложненное дз!
//const num =266219;
//console.log (typeof num);
//console.log (2*6*6*2*1*9);
//let a =1296;
//let b =3;
//const c = a**b;
//console.log(a**b);
//let d = c.toString();

//console.log(d.slice(0, 2));