
// Задание 1 (было сделано ранее)
var msg="";
for(i=1;i<=100;i++)
{
	if (i % 3 == 0) 
	{
		msg = msg + "Fizz"	
	}
	
	if (i % 5 == 0) 
	{
		msg = msg + "Buzz"	
	}
	
	if (msg != "")
	{
		console.log(i, msg)
		msg = ""	
	} 
 	
 	
}

//Задание 2
//Напишите цикл, который выводит треугольник из символов # от 1 до 7
var str = "";
for (i=1; i<=7; i++)
{
	str += "#"
	console.log (str);
}



//Задание 3
/*Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются 
символами новой строки. На каждой позиции либо пробел, либо #. В результате должна 
получиться шахматная доска.*/

var str = "#"; // шахматная клетка
var res = ""; // итоговая строка на вывод

for (i = 1; i <= 64; i++)
{
	res +=str; // наращиваем новую клетку
	if (i % 8 == 0) // если строка кончилась, начинаем новую строку
	{
		res += "\n";
	}
	else // если строка НЕ кончилась - инвертируем клетку
	{
		if (str == "#") 
			{str = " "} 
		else 
			{str = "#"}; 	
	}	 
}
console.log(res); //вывод результата