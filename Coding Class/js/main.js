let i=0;
function res()
{
    if(i%2==0)
    {
        document.querySelector('#result').innerHTML="Мне 17 лет"+"<br>"+"Я учусь в ЮУрГТК"+"<br>"+"Родом из п. Тимирязевский"+"<br>"+
        "Учусь на WEB-разработчика"+"<br>"+"Люблю саморазвитие"+"<br>"+"<b style='color:yellow;'>"+"Приятно познакомиться:)"+"</b>";
        document.querySelector('#aboutMe').innerHTML="Скрыть";
        i++;
    }
    else
    {
        document.querySelector('#result').innerHTML=" ";
        document.querySelector('#aboutMe').innerHTML="Кликните сюда, чтобы узнать меня подробнее...";
        i++;
    }
}
let result = document.querySelector('#aboutMe');
result.addEventListener('click',res);