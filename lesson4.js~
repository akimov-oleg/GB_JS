//Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.
function min(dblFirst, dblSecond)
{
	if (dblFirst < dblSecond)
		return dblFirst; 
	else
		return dblSecond;
}

console.log(min(0, 10)); // → 0 
console.log(min(0, -10)); // → -10

/*

1.Напишите функцию countBs, которая принимает строку в качестве аргумента, и возвращает количество символов “B”, 
содержащихся в строке.Затем напишите функцию countChar, которая работает примерно как countBs, только принимает 
второй параметр — символ, который мы будем искать в строке (вместо того, чтобы просто считать количество символов “B”). 
Для этого переделайте функцию countBs. 
*/

function countBs(strInput)
{
	var lngCounterB = 0; //счётчик символов B
	var lngInputLength = strInput.length; // длина разбираемой строки
	for (i = 0; i < lngInputLength; i++)
	{
		if (strInput.charAt(i) == "B")
			lngCounterB +=1; 
	}
	return lngCounterB;
}

console.log(countBs('Bobby Bonce')); // проверка работы функции

function countChar(strInput, charSearch)
{
	var lngCounterChar = 0; //счётчик символов B
	var lngInputLength = strInput.length; // длина разбираемой строки
	for (i = 0; i < lngInputLength; i++)
	{
		if (strInput.charAt(i) == charSearch)
			lngCounterChar +=1; 
	}
	return lngCounterChar;
}

console.log(countChar('Bobby Bonce', 'o')); // проверка работы функции

/*
Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.
Напишите рекурсивную функцию isEven согласно этим правилам. 
*/

function isEven(lngToCheck) 
{
	var lngLocal;	
	if (lngToCheck < 0)
		lngLocal = -lngToCheck; 
	else 
		lngLocal =  lngToCheck; // сохраним аргумент по модулю во внутренней переменной,
										// в этом случае мы сможем правильно обрабатывать и отрицательные числа;
										// если модуль не взять - функция уйдёт в бесконечность
	if (lngLocal == 0)
		return true;
	else if (lngLocal == 1)
		return false;
	else
		return isEven(lngLocal - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));