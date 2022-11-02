const headElem = document.getElementById("head");
const buttonsElem = document.getElementById("buttons");
const pagesElem = document.getElementById("pages");


class Quiz
{
	constructor(type, questions, results)
	{

		this.type = type;


		this.questions = questions;


		this.results = results;


		this.score = 0;


		this.result = 0;

		this.current = 0;
	}

	Click(index)
	{

		let value = this.questions[this.current].Click(index);
		this.score += value;

		let correct = -1;

		if(value >= 1)
		{
			correct = index;
		}
		else
		{
			for(let i = 0; i < this.questions[this.current].answers.length; i++)
			{
				if(this.questions[this.current].answers[i].value >= 1)
				{
					correct = i;
					break;
				}
			}
		}

		this.Next();

		return correct;
	}

	Next()
	{
		this.current++;
		
		if(this.current >= this.questions.length) 
		{
			this.End();
		}
	}

	End()
	{
		for(let i = 0; i < this.results.length; i++)
		{
			if(this.results[i].Check(this.score))
			{
				this.result = i;
			}
		}
	}
} 


class Question 
{
	constructor(text, answers)
	{
		this.text = text; 
		this.answers = answers; 
	}

	Click(index) 
	{
		return this.answers[index].value; 
	}
}


class Answer 
{
	constructor(text, value) 
	{
		this.text = text; 
		this.value = value; 
	}
}


class Result 
{
	constructor(text, value)
	{
		this.text = text;
		this.value = value;
	}


	Check(value)
	{
		if(this.value <= value)
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}


const results = 
[
	new Result("Слабак", 0),
	new Result("На уровне Ильи Шалкунова", 2),
	new Result("Достойный Питонист", 4),
	new Result("Сеньор Монго ДБ Разработчик", 6),
	new Result("Скриптер Хакер", 15),
	new Result("Ламер", 17),
	new Result("Пользователь Дарк Нета", 20)
];

const questions = 
[
	new Question("1. С помощью закрытого ключа информация", 
	[
		new Answer("A. Расшифровывается", 1),
		new Answer("B. Транслируется", 0),
		new Answer("C. Зашифровывается", 0),
		new Answer("D. Копируется", 0),
		new Answer("E. Формируется", 0)
	]),

	new Question("2. Недостаток систем шифрования с открытым ключом", 
	[
		new Answer("A. Относительная низкая производительность", 1),
		new Answer("B. Необходимость распространения секретных ключей", 0),
		new Answer("C. На одном и том же ключе одинаковые 64-битные блоки открытого текста перейдут в одинаковые блоки шифрованного текста", 0),
		new Answer("D. При использовании простой замены легко произвести подмену одного шифрованного текста другим", 0),
		new Answer("E. высокая трудоемкость", 0)

	]),

	new Question("3. Кто в конечном счете несет ответственность за гарантии того, что данные классифицированы и защищены?", 
	[
		new Answer("A. Владельцы данных", 0),
		new Answer("B. Пользователи", 0),
		new Answer("C. Администраторы", 0),
		new Answer("D. Руководство", 1),
		new Answer("E. Работники", 0)
	]),

	new Question("4. Это лицо, которое предприняло попытку выполнения запрещенных операций (действий) по ошибке, незнанию или осознанно со злым умыслом (из корыстных интересов) или без такового (ради игры или удовольствия, с целью самоутверждения и т.п.) и использующее для этого различные возможности, методы и средства.", 
	[
		new Answer("A. Нарушитель", 1),
		new Answer("B. Мошенник", 0),
		new Answer("C. Злоумышленник", 0),
		new Answer("D. Пользователь", 0),
		new Answer("E. Сотрудник", 0)
	]),

	new Question("5. Мошенник это – ...", 
	[
		new Answer("A. Сотрудник организации, пытающийся преодолеть систему защиты без корыстных целей и злого умысла, для самоутверждения или из спортивного интереса", 0),
		new Answer("B. Сотрудник организации, который может предпринимать попытки выполнения незаконных технологических операций, ввода подложных данных и тому подобные действия в корыстных целях, по принуждению или из злого умысла, но использующий при этом только штатные аппаратные и программные средства от своего имени или от имени другого сотрудника", 1),
		new Answer("C. Постороннее лицо или сотрудник организации", 0),
		new Answer("D. Постороннее лицо или сотрудник организации, действующий целенаправленно из корыстных интересов", 0),
	]),

	new Question("6. Несанкционированный доступ включает:", 
	[
		new Answer("A. Несанкционированное подключение", 0),
		new Answer("B. Несанкционированную модификацию", 0),
		new Answer("C. Несанкционированное блокирование", 0),
		new Answer("D. Несанкционированное уничтожение", 0),
		new Answer("E. Все ответы верны", 1)
	]),
	new Question("7. Препятствие – это", 
	[
		new Answer("A. Метод физического преграждения пути злоумышленнику к ресурсам ИС", 1),
		new Answer("B. Методы криптографической и стеганографической защиты", 0),
		new Answer("C. Метод защиты информации, создающий такие условия автоматизированной обработки, хранения и передачи защищаемой информации, при которых возможности несанкционированного доступа к ней сводились бы к минимуму", 0),
		new Answer("D. Несанкционированное уничтожение", 0),
		new Answer("E. Метод защиты, при использовании которого пользователи", 0)
	]),
	new Question("8. Как называется методы криптографической и стеганографической защиты?", 
	[
		new Answer("A. Препятствие", 0),
		new Answer("B. Маскировка", 1),
		new Answer("C. Регламентация", 0),
		new Answer("D. Принуждение", 0),
	]),
	new Question("9. Символы шифруемого текста перемещаются по определенным правилам внутри шифруемого блока этого текста, это метод:", 
	[
		new Answer("A. Гаммирования", 0),
		new Answer("B. Подстановки", 0),
		new Answer("C. Кодирования", 0),
		new Answer("D. Перестановки", 1),
		new Answer("E. Аналитических преобразований", 0)
	]),
	new Question("10. Символы шифруемого текста последовательно складываются с символами некоторой специальной последовательности, это метод:", 
	[
		new Answer("A. Гаммирования", 1),
		new Answer("B. Подстановки", 0),
		new Answer("C. Кодирования", 0),
		new Answer("D. Перестановки", 0),
		new Answer("E. Аналитических преобразований", 0)
	]),
	new Question("11. Защита информации это:", 
	[
		new Answer("A. Процесс сбора, накопления, обработки, хранения, распределения и поиска информации;", 0),
		new Answer("B. Преобразование информации, в результате которого содержание информации становится непонятным для субъекта, не имеющего доступа;", 0),
		new Answer("C. Получение субъектом возможности ознакомления с информацией, в том числе при помощи технических средств;", 0),
		new Answer("D. Совокупность правил, регламентирующих порядок и условия доступа субъекта к информации и ее носителям;", 0),
		new Answer("E. Деятельность по предотвращению утечки информации, несанкционированных и непреднамеренных воздействий на неё.", 1)
	]),
	new Question("12. К посторонним лицам нарушителям информационной безопасности относится:", 
	[
		new Answer("A. Представители организаций, взаимодействующих по вопросам обеспечения жизнедеятельности организации", 0),
		new Answer("B. Персонал, обслуживающий технические средства", 0),
		new Answer("C. Технический персонал, обслуживающий здание", 0),
		new Answer("D. Сотрудники службы безопасности", 0),
		new Answer("E. Представители конкурирующих организаций", 1)
	]),
	new Question("13. Антивирус не только находит зараженные вирусами файлы, но и лечит их, т.е. удаляет из файла тело программы вируса, возвращая файлы в исходное состояние:", 
	[
		new Answer("A. Детектор", 0),
		new Answer("B. Доктор", 1),
		new Answer("C. Сканер", 0),
		new Answer("D. Ревизор", 0),
		new Answer("E. Сторож", 0)
	]),
	new Question("14. Лицо, самостоятельно создавшее информацию либо получившее на основании закона или договора право разрешать или ограничивать доступ к информации:", 
	[
		new Answer("A. Источник информации", 0),
		new Answer("B. Потребитель информации", 0),
		new Answer("C. Уничтожитель информации",0),
		new Answer("D. Носитель информации", 0),
		new Answer("E. Обладатель информации", 1)
	]),
	new Question("15. Обязательное для выполнения лицом, получившим доступ к определенной информации, требование не передавать такую информацию третьим лицам без согласия ее обладателя это:", 
	[
		new Answer("A. Электронное сообщение", 0),
		new Answer("B. Распространение информации", 0),
		new Answer("C. Предоставление информации", 0),
		new Answer("D. Конфиденциальность информации", 1),
		new Answer("E. Доступ к информации", 0)
	]),
	new Question("16. Информация, переданная или полученная пользователем информационно-телекоммуникационной сети:", 
	[
		new Answer("A. Электронное сообщение", 1),
		new Answer("B. Информационное сообщение", 0),
		new Answer("C. Текстовое сообщение", 0),
		new Answer("D. Визуальное сообщение", 0),
		new Answer("E. SMS-сообщение", 0)
	]),
	new Question("17. Процедура проверки соответствия субъекта и того, за кого он пытается себя выдать, с помощью некой уникальной информации:", 
	[
		new Answer("A. Авторизация", 0),
		new Answer("B. Обезличивание", 0),
		new Answer("C. Деперсонализация", 0),
		new Answer("D. Аутентификация", 1),
		new Answer("E. Идентификация", 0)
	]),
	new Question("18. Ассиметричный алгоритм шифрования", 
	[
		new Answer("A. RSA", 1),
		new Answer("B. Гаммирование", 0),
		new Answer("C. Цезарь", 0),
		new Answer("D. Квадрат Полибия", 0),
		new Answer("E. Поворотные решетки", 0)
	]),
	new Question("19. Защита базы данных резервного копирования осуществляется с помощью", 
	[
		new Answer("A. Зеркальной копии", 1),
		new Answer("B. Пароля", 0),
		new Answer("C. определения прав доступа", 0),
		new Answer("D. установки атрибута «Скрытый» ", 0),
		new Answer("E. смены расширения файла", 0)
	]),
	new Question("20. Искать, получать, передавать, производить и распространять информацию любым законным способом имеет право", 
	[
		new Answer("A. Совершеннолетнее лицо", 0),
		new Answer("B. Только гражданин Республики Казахстан", 0),
		new Answer("C. Сотрудник сферы безопасности", 0),
		new Answer("D. Каждый человек", 1),
		new Answer("E. Только государственный служащий", 0)
	]),
];


const quiz = new Quiz(1, questions, results);

Update();


function Update()
{

	if(quiz.current < quiz.questions.length) 
	{
		
		headElem.innerHTML = quiz.questions[quiz.current].text;

		
		buttonsElem.innerHTML = "";

		
		for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
		{
			let btn = document.createElement("button");
			btn.className = "button";

			btn.innerHTML = quiz.questions[quiz.current].answers[i].text;

			btn.setAttribute("index", i);

			buttonsElem.appendChild(btn);
		}
		
		
		pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;

		//Вызываем функцию, которая прикрепит события к новым кнопкам
		Init();
	}
	else
	{
		//Если это конец, то выводим результат
		buttonsElem.innerHTML = "";
		headElem.innerHTML = quiz.results[quiz.result].text;
		pagesElem.innerHTML = "Очки: " + quiz.score;
	}
}

function Init()
{
	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	for(let i = 0; i < btns.length; i++)
	{
		//Прикрепляем событие для каждой отдельной кнопки
		//При нажатии на кнопку будет вызываться функция Click()
		btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
	}
}

function Click(index) 
{
	//Получаем номер правильного ответа
	let correct = quiz.Click(index);

	//Находим все кнопки
	let btns = document.getElementsByClassName("button");

	//Делаем кнопки серыми
	for(let i = 0; i < btns.length; i++)
	{
		btns[i].className = "button button_passive";
	}

	//Если это тест с правильными ответами, то мы подсвечиваем правильный ответ зелёным, а неправильный - красным
	if(quiz.type == 1)
	{
		if(correct >= 0)
		{
			btns[correct].className = "button button_correct";
		}

		if(index != correct) 
		{
			btns[index].className = "button button_wrong";
		} 
	}
	else
	{
		//Иначе просто подсвечиваем зелёным ответ пользователя
		btns[index].className = "button button_correct";
	}

	//Ждём секунду и обновляем тест
	setTimeout(Update, 1000);
}