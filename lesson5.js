/*
1. Написать функцию преобразования цвета из 10-ного представления в 16-ный. 
Функция должна принимать 3 числа от 0 до 255 и возвращать строковый хеш.
*/

function toHexColor(lngRed, lngGreen, lngBlue) 
{
	var result = '0x' + lngRed.toString(16) + lngGreen.toString(16) + lngBlue.toString(16);
	return result;
}

console.log(toHexColor(255,245,233)) // проверка результата
/*
2. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, 
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, 
десятки и сотни. Например для числа 245 мы должны получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, 'сотни’: 2}. Если число превышает 999, необходимо выдать 
соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function numObject(lngNumber)
{
	if (lngNumber < 0 || lngNumber > 999)
	{
		console.log('Число не входит в диапазон 0-999!');
		return {};	
	}
	else 
	{
		var result = {};
		var string = '00' + lngNumber.toString();
		result.units 		= 'единицы: ' 	+ string.slice(-1);
		result.tens 		= 'десятки: ' 	+ string.slice(-2,-1);
		result.hundreds	= 'сотни: ' 	+ string.slice(-3,-2);
		return result;
	}
}

// проверка функции
var testVar = numObject(123); 
console.log(testVar.units, testVar.tens, testVar.hundreds);

var testVar = numObject(1923); 
console.log(testVar.units, testVar.tens, testVar.hundreds);

/*
Реализовать функцию objectToQueryString(object), которая принимает аргументом объект, возвращает строку.
*/
function objectToQueryString(objInput)
{
	return Object.keys(objInput).map(function(key){return key + '=' + objInput[key];}).join('&');
}

console.log(objectToQueryString({user: 'Dmitry', password: 'pass', id: 12, age: 35}));