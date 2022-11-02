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
	new Question("1. Угроза – это", 
	[
		new Answer("A. система программных языковых организационных и технических средств, предназначенных для накопления и коллективного использования данных", 0),
		new Answer("B. процесс определения отвечает на текущее состояние разработки требованиям данного этапа", 0),
		new Answer("C. потенциальная возможность определенным образом нарушить информационную безопасность", 1),
	]),
    new Question("2. Основные составляющие информационной безопасности:", 
	[
		new Answer("A. Конфиденциальность", 1),
		new Answer("B. Достоверность", 0),
		new Answer("C. Полнота информации", 0),
		new Answer("D. Актуальность информации", 0),
    ]),
    new Question("3. Защита информации – это", 
	[
		new Answer("A. процесс разработки структуры базы данных в соответствии с требованиями пользователей", 0),
		new Answer("B. небольшая программа для выполнения определенной задачи", 0),
		new Answer("C. комплекс мероприятий, направленных на обеспечение информационной безопасности.", 1),
	]),
    new Question("4. Вирус – это", 
	[
		new Answer("A. небольшая программа для выполнения определенной задачи", 0),
		new Answer("B. код обладающий способностью к распространению путем внедрения в другие программы", 1),
		new Answer("C. способность объекта реагировать на запрос сообразно своему типу, при этом одно и то же имя метода может использоваться для различных классов объектов", 0),
	]),
    new Question("5. Источник угрозы – это...", 
	[
		new Answer("A. Злоумышленник", 0),
		new Answer("B. нет правильного ответа", 0),
		new Answer("C. потенциальный злоумышленник", 1),
		new Answer("D. ", 0),
		new Answer("E. ", 0)
	]),
    new Question("6. Доступность информации это", 
	[
		new Answer("A. Права на чтение, копирование, изменение, удаление", 1),
		new Answer("B. Права на законное владение информации", 0),
		new Answer("C. Допустимый размер и формат информации", 0),
	]),
    new Question("7. Средства защиты информации компьютеров", 
	[
		new Answer("A. Браузерный анти-рекламщик, расширения", 0),
		new Answer("B. Аппаратные, программные, организационные", 1),
		new Answer("C. Ай-пи адресс, протоколы", 0),
	]),
    new Question("8. Антивирусные программы", 
	[
		new Answer("A. Kaspesky, Dr Web, ESET NOD32", 1),
		new Answer("B. Windows 7, Linux, UNIX", 0),
		new Answer("C. WinRar, Zip, ISO", 0),

	]),
    new Question("9. Укажите что является компьютерным вирусом", 
	[
		new Answer("A. Троян, Червь, Майнер, Зомби", ""),
		new Answer("B. Амиго Яндекс Тор", 0),
		new Answer("C. WoW, WoT, Dota 2", 0),
		new Answer("D. SRV-18, Грипп, рак", 0),
	]),
    new Question("10. Атака это..", 
	[
		new Answer("A. Попытка реализации угрозы", 1),
		new Answer("B. Потенциальная возможность определенным образом нарушить информационную безопасность", 0),
		new Answer("C. Программы, предназначенные для поиска необходимых программ.", 0),
	]),
    new Question("11. Окно опасности - это..", 
	[
		new Answer("A. Промежуток времени от момента, когда появится возможность слабого места и до момента, когда пробел ликвидируется.", 1),
		new Answer("B. Комплекс взаимосвязанных программ для решения задач определенного класса конкретной  предметной области", 0),
		new Answer("C. Формализованный язык для описания задач алгоритма решения задачи пользователя на компьютере", 0),
	]),
    new Question("12. Основными источниками внутренних отказов являются:", 
	[
		new Answer("A. Отступление от установленных правил эксплуатации", 0),
		new Answer("B. Разрушение данных", 0),
		new Answer("C. Все ответы правильные", 1),
	]),
    new Question("13. По отношению к поддерживающей инфраструктуре рекомендуется рассматривать следующие угрозы:", 
	[
		new Answer("A. Нет правильного ответа", 0),
		new Answer("B. Обрабатывать большой объем программной информации", 0),
		new Answer("C. Невозможность и нежелание обслуживающего персонала или пользователя выполнять свои обязанности", 1),
	]),
    new Question("14. По механизму распространения П.О. различают", 
	[
		new Answer("A. Вирусы", 0),
		new Answer("B. Черви", 0),
		new Answer("C. Все ответы правильные", 1),
		new Answer("D. ", 0),
		new Answer("E. ", 0)
	]),
    new Question("15. Черви - это..", 
	[
		new Answer("A. Код способный самостоятельно, то есть без внедрения в другие программы вызывать распространения своих копий по И.С. и их выполнения", 1),
		new Answer("B. Код обладающий способностью к распространению путем внедрения в другие программы", 0),
		new Answer("C. Программа действий над объектом или его свойствами", 0),
	]),
    new Question("16. Отказ, ошибки, сбой – это:", 
	[
		new Answer("A. Природные угрозы", 0),
		new Answer("B. Случайные угрозы", 1),
		new Answer("C. Преднамеренные угрозы", 0),
	]),
    new Question("17. Ошибка – это…", 
	[
		new Answer("A. Негативное воздействие на программу", 0),
		new Answer("B. Нарушение работоспособности элемента системы, что приводит к невозможности выполнения им своих функций", 0),
		new Answer("C. Неправильное выполнение элементом одной или нескольких функций происходящее в следствии специфического состояния", 1),
		new Answer("D. ", 0),
		new Answer("E. ", 0)
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