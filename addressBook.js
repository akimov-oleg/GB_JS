// счётчик
var usersCounter = 0;

// функция присвоения идентификатора
function newId(){return ++usersCounter;}

// функция добавления пользователя
function addUser(users) 
{
	var user = {};
	user.id 					= newId();
	user.lastName 			= prompt("Введите фамилию:");
	user.firstName 		= prompt("Введите имя:");
	user.fathersName 		= prompt("Введите отчество:");
	user.birthDate 		= prompt("Введите дату рождения в формате 'ДД.ММ.ГГГГ':");
	var phones 				= prompt("Введите номера телефонов через запятую");
	user.phoneNumbers = phones.split(",");

	users.push(user);
}


// функция вывода в csv
function csvFormat(users) 
{
  return users.map(
  function(user) 
  {
    return Object.keys(user).map(function(key) 
    { 
      if(typeof user[key] == 'string' || typeof user[key] == 'number') 
      return '"' + user[key] + '"'; 
      else 
      return user[key].map(function(phone) 
      { return '"' + phone + '"'; }).join(';');
    }).join(';');
  }).join('\r\n');
}

// функция удаления пользователя
function deleteUser(lngId)
{
	for (i = 0; i < users.length; i++)
	{
		if (users[i].id == lngId)
			{
				users.splice(i, 1);
				break;
			}	
	}

}


// создание первичных записей в массиве
var users =
[
	{
	id: newId(),
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
	id: newId(),
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

// добавление пользователя
addUser(users);

// удаление пользователя с id = 2
deleteUser(2);

// вывод книги
for (i = 0; i < users.length; i++)
{
	console.log
	(
		"Идентификатор: "		+ users[i].id +
		"\nФамилия: " 			+ users[i].lastName +
		"\nИмя: "				+ users[i].firstName +
		"\nОтчество: " 		+ users[i].fathersName +
		"\nДата рождения: " 	+ users[i].birthDate +
		"\nТелефоны: " 		+ users[i].phoneNumbers.join(", ") +
		"\n\n"
		 
	)
}


// выводим содержимое csv-файла
console.log(csvFormat(users)); 