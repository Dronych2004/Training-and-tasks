/*
function cachingDecoratorNew(func) {
  let cache = [];
  
    function wrapper(...args) {
        const hash = args.join(','); // получаем правильный хэш
        let idx = cache.findIndex((item)=> item === cache[hash]); // ищем элемент, хэш которого равен нашему хэшу
        if (idx !== -1 ) { // если элемент не найден
            console.log("Из кэша: " + cache[hash]); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кэша: " + cache[hash];
        } else {
            let result = func(...args); // в кэше результата нет - придётся считать
            cache.push(result) ; // добавляем элемент с правильной структурой
            if (cache.length > 5) { 
              cache.shift(0) // если слишком много элементов в кэше надо удалить самый старый (первый) 
            }
            console.log("Вычисляем: " + result);
            return "Вычисляем: " + result;  
        }
    }
  return wrapper;
}
*/



function debounceDecoratorNew(func, delay) {
  let timeoutId; // задаем время вызова функции
  let hasCalled = false; //были ли вызовы вообще (первый вызов)

  function doIt(args) {
    func.apply(this, args);
    hasCalled = true;
    wrapper.count++; // учет вызова функции
  }

  function wrapper(...args) {
    if (timeoutId) clearTimeout(timeoutId);
    if (!wrapper.count) wrapper.count = 0; // если вызовов функции не было -  равен нулю
    if (!wrapper.allCount) wrapper.allCount = 0; // если вызовов декоратора не было  -  равно нулю

    if (!hasCalled) { //если был вызов  - идет отработка и учет отрабтанной функции (к строке 31 -  34)
      doIt(args);
    } else {
      wrapper.allCount++; //иначе отрабатывает декоратор и учитывается (в случае если вызов чаще заданного времени)
      timeoutId = setTimeout(() => doIt(args), delay);
    }
  }
  return wrapper;
}



const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);

const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);

setTimeout(() => upgradedSendSignal(1, 0)); // Сигнал отправлен + будет запланирован асинхронный запуск, который будет проигнорирован, так как следующий сигнал отменит предыдущий (300 - 0 < 2000)

setTimeout(() => upgradedSendSignal(2, 300), 300); // проигнорировано, так как следующий сигнал отменит предыдущий (900 - 300 < 2000)

setTimeout(() => upgradedSendSignal(3, 900), 900); // проигнорировано, так как следующий сигнал отменит предыдущий (1200 - 900 < 2000)

setTimeout(() => upgradedSendSignal(4, 1200), 1200); // проигнорировано, так как следующий сигнал отменит предыдущий (2300 - 1200 < 2000)

setTimeout(() => upgradedSendSignal(5, 2300), 2300); // Сигнал отправлен, так как следующий вызов не успеет отменить текущий: 4400-2300=2100 (2100 > 2000)

setTimeout(() => upgradedSendSignal(6, 4400), 4400); // проигнорировано, так как следующий сигнал отменит предыдущий (4500 - 4400 < 2000)

setTimeout(() => upgradedSendSignal(7, 4500), 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с

setTimeout(() => {
  console.log('Сигналы:', upgradedSendSignal.count); // было выполнено 3 отправки сигнала
  console.log('Вызовы:', upgradedSendSignal.allCount); // было выполнено 6 вызовов декорированной функции
}, 7000)
