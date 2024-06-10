'use strict';
 // вариант без преобразования дат и проверок чкорректности вводимых данных   
/*  const interestRate = 0; //процентная ставка
    const firstPayment = 0; //первоначальный взнос
    const creditSum = 0; //сумма кредита
    const timeCredit = 0; //конечная дата кредита, переведем в месяцы
function ipotekaFunc(interestRate, firstPayment, creditSum, timeCredit) {
   
    const creditBody = creditSum - firstPayment; //тело кредита
    if (creditSum === firstPayment) {
        console.log(0);
        return;
    } else {
        const everyMonthPay = creditBody * (interestRate/(12*100) + (interestRate/(12*100))/(((1 + interestRate/(12*100))**timeCredit) - 1)); //ежемесячный платеж, timeCredit в месяцах
        const generalSum = ((everyMonthPay * timeCredit) + firstPayment).toFixed(2); //общая сумма к погашению, округленная до сотых
        console.log(generalSum);
        return generalSum; 
    }
    
}

ipotekaFunc(10, 0, 50000, 12)
ipotekaFunc(10, 1000, 50000, 12)
ipotekaFunc(10, 0, 20000, 24)
ipotekaFunc(10, 1000, 20000, 24)
ipotekaFunc(10, 20000, 20000, 24)
ipotekaFunc(10, 0, 10000, 36)
ipotekaFunc(15, 0, 10000, 36) 
*/


    const interestRate = 0; //процентная ставка
    const firstPayment = 0; //первоначальный взнос
    const creditSum = 0; //сумма кредита
    const timeCredit = 0; // длительность кредита в месяцах
    function ipotekaFunc(interestRate, firstPayment, creditSum, timeCredit) {
   
        if ((typeof interestRate === 'number') && (typeof firstPayment === 'number') && (typeof creditSum === 'number') && (typeof timeCredit === 'number')) {

            const creditBody = creditSum - firstPayment; //тело кредита
            if (creditSum === firstPayment) {
            console.log(0);
            return;
            } else {
            const everyMonthPay = creditBody * (interestRate/(12*100) + (interestRate/(12*100))/(((1 + interestRate/(12*100))**timeCredit) - 1)); //ежемесячный платеж, timeCredit в месяцах
            const generalSum = ((everyMonthPay * timeCredit) + firstPayment).toFixed(2); //общая сумма к погашению, округленная до сотых
            console.log(generalSum);
            return generalSum; 
            }
        } else if (typeof interestRate != 'number') {
            console.log(`Параметр interestRate содержит неправильное значение "${interestRate}"`);
            
        }
        else if (typeof firstPayment != 'number') {
            console.log(`Параметр firstPayment содержит неправильное значение "${firstPayment}"`);
            
        } else if (typeof creditSum != 'number') {
            console.log(`Параметр creditSum содержит неправильное значение "${creditSum}"`);
            
        } else if (typeof timeCredit != 'number') {
            const timeCreditMs = Date.parse(timeCredit); //конечная дата в милисекундах
            const timeCreditMonth = Math.floor((timeCreditMs - Date.now())/(1000 * 60 * 60 *24 * 30)%12); //вычисляем милисекунды длительности кредита в месяцах
            const creditBody = creditSum - firstPayment; //тело кредита
            if (creditSum === firstPayment) {
            console.log(0);
            return;
            } else {
            const everyMonthPay = creditBody * (interestRate/(12*100) + (interestRate/(12*100))/(((1 + interestRate/(12*100))**timeCreditMonth) - 1)); //ежемесячный платеж в месяцах
            const generalSum = ((everyMonthPay * timeCreditMonth) + firstPayment).toFixed(2); //общая сумма к погашению, округленная до сотых
            console.log(generalSum);
            return generalSum;
            }
        }   
    }
        

    

    


ipotekaFunc(10, 0, 20000, 24)
ipotekaFunc(10, 20000, 20000, 24)
ipotekaFunc('string1', 0, 20000, 24)
ipotekaFunc(10, 'string2', 20000, 24)
ipotekaFunc(10, 0, 'string3', 24)
ipotekaFunc(10, 0, 20000, '2026-03-01')
ipotekaFunc(10, 0, 10000, 36)
ipotekaFunc(10, 0, 10000, '2027-03-01')