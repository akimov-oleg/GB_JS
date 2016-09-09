function pick(obj, keys)
{
	var result = {};
	var current;
	for (i in keys)
	{
		current = obj[keys[i]];
		if (current != undefined) result[[i]] = current;
	}
	return result;
}

var user =
{
	name:		"Sergey",
	age:		30,
	email:	"sergey@gmail.com",
	friends:	["Sveta", "Artem"]	
}

console.log(pick(user, ["name"]));
console.log(pick(user, ["name", "second-name"]));
console.log(pick(user, ["name", "friends"]));