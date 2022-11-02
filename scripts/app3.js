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
	new Question("1. Преобразование открытого текста сообщения в закрытый называется:", 
	[
		new Answer("A. процедура шифрования;", 1),
		new Answer("B. алгоритм шифрования;", 0),
		new Answer("C. обеспечение аутентификации;", 0),
		new Answer("D. цифровая запись;", 0),
	]),
    new Question("2. Входные параметры процесса шифрования {несколько верных ответов):", 
	[
		new Answer("A. Зашифрованный текст", 0),
		new Answer("B. Ключ", 1),
		new Answer("C. Открытый текст", 1),
		new Answer("D. Алгоритм", 0),
	]),
    new Question("3. Какие из сервисов реализуются при использовании криптографических преобразований {несколько верных ответов):", 
	[
		new Answer("A. Контроль целостности", 1),
		new Answer("B. Аутентификация", 1),
		new Answer("C. Шифрование", 0),
		new Answer("D. Алгоритм", 0),
		new Answer("E. ", 0)
	]),
    new Question("4. Что позволяет предотвратить использование криптографических преобразований:", 
	[
		new Answer("A. отказ от информации;", 0),
		new Answer("B. Обеспечение аутентификации", 0),
		new Answer("C. Утечку информации", 1),
		new Answer("D. Использование алгоритмов асимметричного шифрования.", 0),
	]),
    new Question("5. Знание ключа позволяет:", 
	[
		new Answer("A. использовать криптографические сервисы безопасности;", 0),
		new Answer("B. обеспечивать аутентификацию", 0),
		new Answer("C. предотвратить утечку информации;", 0),
		new Answer("D. выполнить обратное преобразование", 1),
	]),
    new Question("6. Что в криптографии понимается под термином «элементарное опробование»:", 
	[
		new Answer("A. операция над двумя «-разрядными двоичными числами;", 1),
		new Answer("B. Проверка ключа на целостность", 0),
		new Answer("C. сопоставление двух паролей;", 0),
		new Answer("D. передача ключа по какому-либо каналу связи.", 0),
	]),
    new Question("7. Чем определяется уровень надежности применяемых криптографических преобразований:", 
	[
		new Answer("A. значением допустимой вероятности неисправностей или сбоев, приводящих к получению злоумышленником дополнительной информации о криптографических преобразованиях;", 1),
		new Answer("B. сложностью комбинации символов, выбранных случайным образом;", 0),
		new Answer("C. использованием большого числа ключей для шифрования;", 0),
		new Answer("D. отношением количества дешифрованной информации к общему количеству шифрованной информации, подлежащей дешифрованию.", 0),
	]),
    new Question("8. Ниже перечислены механизмы защиты информационных систем от несанкционированного доступа. Что здесь лишнее:", 
	[
		new Answer("A. идентификация и аутентификация пользователей и субъектов доступа;", 0),
		new Answer("B. Управление доступом", 0),
		new Answer("C. обеспечение постоянного числа пользователей сети;", 1),
		new Answer("D. обеспечения целостности;", 0),
		new Answer("E. Регистрация и учет", 0)
	]),
    new Question("9. Что называется имитовставкой:", 
	[
		new Answer("A. это блок данных, переменной длины, который вырабатывают по определенному правилу из открытых данных с использованием ключа и затем добавляют к зашифрованным данным для обеспечения их имитозащиты", 0),
		new Answer("B. это блок данных фиксированной длины, который вырабатывают по определенному правилу из открытых данных с использованием ключа и затем добавляют к зашифрованным данным для обеспечения их имитозащиты.", 1),
	]),
    new Question("10. Как иначе называется симметричное шифрование:", 
	[
		new Answer("A. шифрование с закрытым ключом", 1),
		new Answer("B. шифрование методом Бейтса;", 0),
		new Answer("C. шифрование с открытым ключом;", 0),
		new Answer("D. шифрование с переменным ключом;", 0),
	]),
    new Question("11. Какой алгоритм не используется при симметричном шифровании:", 
	[
		new Answer("A. поточное шифрование;", 0),
		new Answer("B. побитовое шифрование;", 0),
		new Answer("C. блочное шифрование;", 0),
		new Answer("D. алгоритм Эль-Гамаля.", 1),
	]),
    new Question("12. Какой из режимов алгоритма DES используется для построения шифров гаммирования?", 
	[
		new Answer("A. электронная кодовая книга;", 0),
		new Answer("B. сцепление блоков шифра", 0),
		new Answer("C. обратная связь по шифротексту;", 0),
		new Answer("D. обратная связь по выходу.", 1),
	]),
    new Question("13. Какова длина блока алгоритма шифрования DES:", 
	[
		new Answer("A. 16 бит", 0),
		new Answer("B. 56 бит", 0),
		new Answer("C. 64 бит", 1),
		new Answer("D. 5 байт", 0),
	]),
    new Question("14. Сколько всего циклов выполняется операция зашифровывания в алгоритме DES:", 
	[
		new Answer("A. Ю", 0),
		new Answer("B. 14", 0),
		new Answer("C. 16", 1),
		new Answer("D. 20", 0),
	]),
    new Question("15. Что является преимуществом симметричного шифрования:", 
	[
		new Answer("A. скорость выполнения криптографических преобразований;", 1),
		new Answer("B. легкость внесения изменений в алгоритм шифрования;", 0),
		new Answer("C. секретный ключ известен только получателю информации и первоначальный обмен не требует передачи секретного ключа;", 0),
		new Answer("D. применение в системах аутентификации (электронная подпись).", 0),
	]),
    new Question("16. Какой размер ключа в отечественном стандарте симметричного шифрования:", 
	[
		new Answer("A. 56 бит", 0),
		new Answer("B. 124 бит", 0),
		new Answer("C. 256 бит", 1),
	]),
    new Question("17. Какие из режимов шифрования данных не включает в себя отечественный стандарт симметричного шифрования:", 
	[
		new Answer("A. режим гаммирования;", 0),
		new Answer("B. режим простой замены;", 0),
		new Answer("C. режим обратной связи по шифротексту;", 1),
		new Answer("D. режим гаммирования с обратной связью.", 0),
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