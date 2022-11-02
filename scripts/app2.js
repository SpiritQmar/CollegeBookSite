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
	new Question("1. Какая категория является наиболее рискованной для компании с точки зрения вероятного мошенничества и нарушения безопасности?", 
	[
		new Answer("A. Сотрудники", 1),
		new Answer("B. Хакеры", 0),
		new Answer("C. Атакующие", 0),
		new Answer("C. Контрагенты (лица, работающие по договору",0),
	]),
    new Question("2. Если различным группам пользователей с различным уровнем доступа требуется доступ к одной и той же информации, какое из указанных ниже действий следует предпринять руководству?", 
	[
		new Answer("A. Снизить уровень безопасности этой информации для обеспечения ее доступности и удобства использования", 0),
		new Answer("B. Требовать подписания специального разрешения каждый раз, когда человеку требуется доступ к этой информации", 0),
		new Answer("D. Улучшить контроль за безопасностью этой информации", 1),
		new Answer("E. Снизить уровень классификации этой информации ", 0)
	]),
    new Question("3. Что такое процедура?", 
	[
		new Answer("A. Правила использования программного и аппаратного обеспечения в компании", 0),
		new Answer("B. Пошаговая инструкция по выполнению задачи", 1),
		new Answer("C. Руководство по действиям в ситуациях, связанных с безопасностью, но не описанных в стандартах", 0),
		new Answer("D. Обязательные действия ", 0),
	]),
    new Question("4. Какой фактор наиболее важен для того, чтобы быть уверенным в успешном обеспечении безопасности в компании?", 
	[
		new Answer("A. Поддержка высшего руководства", 1),
		new Answer("B. Эффективные защитные меры и методы их внедрения", 0),
		new Answer("C. Актуальные и адекватные политики и процедуры безопасности", 0),
		new Answer("D. Проведение тренингов по безопасности для всех сотрудников ", 0),
	]),
    new Question("5. Когда целесообразно не предпринимать никаких действий в отношении выявленных рисков?", 
	[
		new Answer("A. Никогда. Для обеспечения хорошей безопасности нужно учитывать и снижать все риски", 0),
		new Answer("B. Когда риски не могут быть приняты во внимание по политическим соображениям", 0),
		new Answer("C. Когда необходимые защитные меры слишком сложны", 0),
		new Answer("D. Когда стоимость контрмер превышает ценность актива и потенциальные потери", 1),
	]),
    new Question("6. Что такое политики безопасности?", 
	[
		new Answer("A. Пошаговые инструкции по выполнению задач безопасности", 0),
		new Answer("B. Общие руководящие требования по достижению определенного уровня безопасности", 0),
		new Answer("C. Широкие, высокоуровневые заявления руководства", 1),
		new Answer("D. Детализированные документы по обработке инцидентов безопасности", 0),
	]),
    new Question("7. Какая из приведенных техник является самой важной при выборе конкретных защитных мер?", 
	[
		new Answer("A. Анализ рисков", 0),
		new Answer("B. Анализ затрат / выгоды", 1),
		new Answer("C. Результаты ALE", 0),
		new Answer("D. Выявление уязвимостей и угроз, являющихся причиной риска", 0),
	]),
    new Question("8. Что лучше всего описывает цель расчета ALE?", 
	[
		new Answer("A. Количественно оценить уровень безопасности среды", 0),
		new Answer("B. Оценить возможные потери для каждой контрмеры", 0),
		new Answer("C. Количественно оценить затраты / выгоды", 0),
		new Answer("D. Оценить потенциальные потери от угрозы в год", 1),
	]),
    new Question("9. Тактическое планирование – это:", 
	[
		new Answer("A. Среднесрочное планирование", 1),
		new Answer("B. Долгосрочное планирование", 0),
		new Answer("C. Ежедневное планирование", 0),
		new Answer("D. Планирование на 6 месяцев ", 0),
	]),
    new Question("10. Что является определением воздействия (exposure) на безопасность?", 
	[
		new Answer("A. Нечто, приводящее к ущербу от угрозы", 1),
		new Answer("B. Любая потенциальная опасность для информации или систем", 0),
		new Answer("C. Любой недостаток или отсутствие информационной безопасности", 0),
		new Answer("D. Потенциальные потери от угрозы", 0),
	]),
    new Question("11. Эффективная программа безопасности требует сбалансированного применения:", 
	[
		new Answer("A. Контрмер и защитных механизмов", 0),
		new Answer("B. Физической безопасности и технических средств защиты", 0),
		new Answer("C. Технических и нетехнических методов", 1),
		new Answer("D. Процедур безопасности и шифрования", 0),
	]),
    new Question("12. Функциональность безопасности определяет ожидаемую работу механизмов безопасности, а гарантии определяют:", 
	[
		new Answer("A. Классификацию данных после внедрения механизмов безопасности", 0),
		new Answer("B. Внедрение управления механизмами безопасности", 0),
		new Answer("C. Уровень доверия, обеспечиваемый механизмом безопасности", 1),
		new Answer("D. Соотношение затрат / выгод", 0),
	]),
    new Question("13. Какое утверждение является правильным, если взглянуть на разницу в целях безопасности для коммерческой и военной организации?", 
	[
		new Answer("A. Только военные имеют настоящую безопасность", 0),
		new Answer("B. Коммерческая компания обычно больше заботится о целостности и доступности данных, а военные – о конфиденциальности", 1),
		new Answer("C. Военным требуется больший уровень безопасности, т.к. их риски существенно выше", 0),
		new Answer("D. Коммерческая компания обычно больше заботится о доступности и конфиденциальности данных, а военные – о целостности", 0),
	]),
    new Question("14. Как рассчитать остаточный риск?", 
	[
		new Answer("A. Угрозы х Риски х Ценность актива", 0),
		new Answer("B. (Угрозы х Ценность актива х Уязвимости) х Риски", 0),
		new Answer("C. SLE x Частоту = ALE", 0),
		new Answer("D. (Угрозы х Уязвимости х Ценность актива) x Недостаток контроля", 1),
	]),
    new Question("15. Что из перечисленного не является целью проведения анализа рисков?", 
	[
		new Answer("A. Делегирование полномочий", 1),
		new Answer("B. Количественная оценка воздействия потенциальных угроз", 0),
		new Answer("C. Выявление рисков", 0),
		new Answer("D. Определение баланса между воздействием риска и стоимостью необходимых контрмер", 0),
	]),
    new Question("16. Что из перечисленного не является задачей руководства в процессе внедрения и сопровождения безопасности?", 
	[
		new Answer("A. Поддержка", 0),
		new Answer("B. Выполнение анализа рисков", 1),
		new Answer("C. Определение цели и границ", 0),
		new Answer("D. Делегирование полномочий", 0),
	]),
    new Question("17. Почему при проведении анализа информационных рисков следует привлекать к этому специалистов из различных подразделений компании?", 
	[
		new Answer("A. Чтобы убедиться, что проводится справедливая оценка", 0),
		new Answer("B. Это не требуется. Для анализа рисков следует привлекать небольшую группу специалистов, не являющихся сотрудниками компании, что позволит обеспечить беспристрастный и качественный анализ", 0),
		new Answer("C. Поскольку люди в различных подразделениях лучше понимают риски в своих подразделениях и смогут предоставить максимально полную и достоверную информацию для анализа", 1),
		new Answer("D. Поскольку люди в различных подразделениях сами являются одной из причин рисков, они должны быть ответственны за их оценку", 0),
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