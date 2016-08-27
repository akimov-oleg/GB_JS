var users =
[
	{
	lastName:	"Зюзин",
	firstName:	"Эрнест",
	fathersName:"Витольдович",
	birthDate:	"26.04.1986",
	phoneNumbers:
	[
		"+74959879876",
		"+79253419804"
	],
	},	
	{
	lastName:	"Булыжников",
	firstName:	"Мефодий",
	fathersName:"Назарович",
	birthDate:	"03.03.2003",
	phoneNumbers:
	[
		"+04498721384",
		"+03893293829"
	]
	}
]

var user = {};
user.lastName 			= prompt("Введите фамилию:");
user.firstName 		= prompt("Введите имя:");
user.fathersName 		= prompt("Введите отчество:");
user.birthDate 		= prompt("Введите дату рождения в формате 'ДД.ММ.ГГГГ':");
var phones 				= prompt("Введите номера телефонов через запятую");
user.phoneNumbers = phones.split(",");

users.push(user);

for (i = 0; i < users.length; i++)
{
	console.log
	(
		"Фамилия: " 			+ users[i].lastName +
		"\nИмя: "				+ users[i].firstName +
		"\nОтчество: " 		+ users[i].fathersName +
		"\nДата рождения: " 	+ users[i].birthDate +
		"\nТелефоны: " 		+ users[i].phoneNumbers.join(", ") +
		"\n\n"
		 
	)
}
