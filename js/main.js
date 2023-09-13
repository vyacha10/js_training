let money = +prompt ('Ваш месячный доход?');
console.log (money);

//let income ='freelance';
//console.log ( typeof 'income');

let addExpenses = prompt ('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log (addExpenses);
//console.log (addExpenses.length);
//console.log (addExpenses.toLowerCase());
//console.log (addExpenses.split (', '));

let deposit = confirm ('Есть ли у вас депозит в банке?');
console.log (deposit);

let expenses1 = prompt ('Введите обязательную статью расходов?');
console.log (expenses1);
let expenses2 = prompt ('Введите обязательную статью расходов?');
console.log (expenses2);
let amount1 = prompt ('Во сколько это обойдется?');
console.log (amount1);
let amount2 = prompt ('Во сколько это обойдется?');
console.log (amount2);

let budgetMonth = money - (amount1 + amount2);
console.log('Бюджет на месяц: ', budgetMonth);
let budgetMonth1 = Number(money) - (Number(amount1) + Number(amount2));

let mission =  1000000000;
console.log(`Цель будет достигнута за: ${Math.ceil (mission/budgetMonth)} месяцев`);
//const missionString = `цель заработать ${mission} долларов`;
//console.log (missionString); 
let budgetDay = budgetMonth / 30;
console.log('Бюджет на день: ', Math.floor(budgetDay));

if (budgetDay > 1200) {
    console.log ('у вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay < 1200 ) {
    console.log ('у вас средний уровень дохода');
} else if (budgetDay < 600) {
    console.log ('к сожалению уровень дохода ниже среднего');
} else if (budgetDay < 0) {
    console.log ('что то  пошло не так')
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