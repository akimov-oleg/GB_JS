//Функция arrayToList
function arrayToList(arr) 
{
		var result = null;
		for (i = arr.length - 1; i >= 0; i--)
		{
			result = {value: arr[i], rest:result}		
		}
		return result;
}

// Функция listToArray
function listToArray(lst) 
{
	var result = [];
	var rst = lst;
	while (rst != null)
	{
		result.push(rst.value);
		rst = rst.rest;
	}
	return result;
}

// Функция prepend
function prepend(element, list) 
{
	var result = {value:element, rest:list};
	return result
}

// Функция nth
function nth(pos, list)
{
	var result;
	var rst = list;
	for (i = 0; i <= pos; i++)
	{
		if (rst == null)
		{
			result = undefined;
			break;
		}
		else 
		{			
			result = rst.value;
			rst = rst.rest;
		}
	}
	return result;
}  

// check functions

var barr = [1, 2, 3];
var blst = arrayToList(barr);
var carr = listToArray(blst);

console.log(carr);

blst = prepend(11, blst);

console.log(blst.value);
console.log(listToArray(blst));
console.log(nth(1, blst));
console.log(nth(4, blst));
