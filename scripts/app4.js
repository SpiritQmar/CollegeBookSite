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
	new Question("1. Преимущество использования PGP", 
	[
		new Answer("A. Хэш Функция", 1),
		new Answer("B. Быстрота работы", 0),
		new Answer("C. Мало занимаемое место на диске", 0),
	]),
    new Question("2. Для чего используется Хэш-Функция", 
	[
		new Answer("A. Для хранения паролей, в создании наборов данных", 1),
		new Answer("B. Строительство фреймворков", 0),
		new Answer("C. Написания кода для игр", 0),
		new Answer("D. Создания сайтов с функцией", 0),
	]),
    new Question("3. Кто создатель пакета по для шифрования электронной почты PGP", 
	[
		new Answer("A. Филипп Вижунерис", 0),
		new Answer("B. Альберт Эйнштейн", 0),
		new Answer("C. Филипп Циммерман", 1),
		new Answer("D. Пиджип Перил", 0),
	]),
    new Question("4. PGP – это", 
	[
		new Answer("A. Модель IBM", 0),
		new Answer("B. Расширение файла игр", 0),
		new Answer("C. Разметка сайта", 0),
		new Answer("D. криптографическая программа", 1),
	]),
    new Question("5. В PGP применяется принцип", 
	[
		new Answer("A. Криптографии гаммированием", 0),
		new Answer("B. Закрытого и открытого ключа", 1),
		new Answer("C. Дублированием и резервным копированием", 0),
	]),
    new Question("6. Какой вид лицензии ПО имеет PGP", 
	[
		new Answer("A. freeware", 0),
		new Answer("B. shareware", 0),
		new Answer("C. commercial", 1),
	]),
    new Question("7. Как PGP работает?", 
	[
		new Answer("A. Переставляет письма, генерирует шифрование рисунка", 0),
		new Answer("B. сжимает текст, генерирует сессионный ключ, зашифровывает ключ", 1),
		new Answer("C. Визуализирует угрозу криптографии", 0),
	]),
    new Question("8. В каком году реализовался первый выпуск PGP", 
	[
		new Answer("A. 1998", 0),
		new Answer("B. 2003", 0),
		new Answer("C. 1991", 1),
		new Answer("D. 2000", 0),
	]),
    new Question("9. В настоящее время кто является владельцем PGP", 
	[
		new Answer("A. Symantec Corp", 1),
		new Answer("B. PGP Corporation", 0),
		new Answer("C. GnuPG", 0),
		new Answer("D. IBM", 0),
		new Answer("E. Microsoft", 0)
	]),
    new Question("10. Какие программы использовались при создании PGP", 
	[
		new Answer("A. GnuPG, FileCrypt", 1),
		new Answer("B. RFC, Oracle", 0),
		new Answer("C. Java, C#", 0),
		new Answer("D. Pingeon, PGEENPNG", 0),
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