//Функция reverseArray
function reverseArray(arr)
{
	var result = [];
	for (i = arr.length - 1; i >= 0; i--)
	{
		result.push(arr[i]);
	}
	return result;
}

//Функция reverseArrayInPlace

function reverseArrayInPlace(arr)
{
	var local;
	var len = arr.length - 1;
	var len2 = len / 2;
	for (i = 0; i <= len2; i++)
	{
		local = arr[i];
		arr[i] = arr[len - i];
		arr[len - i] = local;
	}
}

barr = [1, 9, 51, 4, 28, -5];

// Check reverseArray
console.log("Check reverseArray");
console.log("Source:");
console.log(barr);

console.log("Result:");
jarr = reverseArray(barr);
console.log(jarr);

//Check reverseArrayInPlace
console.log("Check reverseArrayInPlace");
console.log("Source:");
console.log(barr);

console.log("Result:");
reverseArrayInPlace(barr);
console.log(barr);