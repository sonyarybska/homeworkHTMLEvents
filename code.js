//- Створити довільний елемент с id = text. використовуючи JavaScript,
// зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
/*
 let text =document.querySelector('#text');
let button=document.querySelector('#btn');

 button.onclick=()=>{
  return text.innerHTML='';
 }
*/
// - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
/*
let button=document.querySelector('#btn');

button.onclick=()=>{
 return button.hidden=true;}
 */

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18,
// //     та повідомити про це користувача
/*
let forma = document.forms.myForm;
let button2=document.querySelector('#btn2');
button2.onclick=()=>{
 if(forma.age.value<18)alert('Вік менше 18');
 if(forma.age.value>18)console.log(forma.age.value);
}
*/

// - Створіть меню, яке розгортається/згортається при клику
/*
const a1 = document.querySelector('#a1');
const subMenu = document.querySelector('#subMenu');
let flag=true;
a1.onclick = event => {
  if(flag){
      subMenu.style.display='none';
      flag=false;
  }
  else {
      subMenu.style.display='block'
      flag=true;
  }
}
*/
// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

// let commentList = [
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem', body: 'lorem ipsum dolo sit ameti'}
//
// ]
//     Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
// let content = document.querySelector('#content');
//
// for (let i = 0; i < commentList.length; i++) {
//     let divka = document.createElement('div');
//     let h2 = document.createElement('h2');
//     let p = document.createElement('p');
//     let button = document.createElement('button');
//     content.appendChild(divka);
//     divka.appendChild(h2);
//     divka.appendChild(p);
//     divka.appendChild(button);
//     button.innerText = 'Click';
//     h2.innerHTML = `Title: ${commentList[i].title}`;
//     p.innerHTML = `${commentList[i].body}`
//     let flag = true;
//     button.onclick = () => {
//         if (flag) {
//             p.style.display = 'none';
//             flag = false;
//         } else {
//             p.style.display = 'block'
//             flag = true;
//         }
//     }
// }


// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// //     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
/*
let forma1=document.forms.myForm1;
let forma2=document.forms.myForm2;
let btn=document.querySelector('#btn');
btn.onclick=()=>{
    console.log(forma1.input1.value);
    console.log(forma1.input2.value);
    console.log(forma2.input3.value);
    console.log(forma2.input4.value);
}
*/

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
/*
function table(a,b,root) {
    for (let i = 0; i < a; i++) {
        let rows = document.createElement('tr');
        rows.style.border='2 px solid red';
        rows.style.height='20px'
        rows.style.backgroundColor='red';
        root.appendChild(rows);
        rows.innerText='Hello'

        for (let i = 0; i < b; i++) {
            let columns = document.createElement('th');
            rows.appendChild(columns);
            columns.style.border='1 px solid red';
            columns.style.width='30px';
            columns.innerText='Hello'


        }

    }
}
table (10,2,tbl);
 */


// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
/*
let photo = [
    {
        image: 'image/PSX_20190920_194753.jpg'
    },
    {
        image: 'image/PSX_20190921_133604.jpg'
    },
    {
        image: 'image/epend%20(1).png'
    }
]

let cont = document.querySelector('#cont');
let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');
let img = document.createElement('img');
cont.appendChild(img);
img.style.width = '400px';
img.style.height = '400px';
img.src = photo[0].image;
let i = 0;
 btn.onclick=()=>{
     i - 1 < 0 ?
         i = photo.length - 1 :
         i = i - 1;
     img.src = photo[i].image;
 }

 btn2.onclick=()=>{
     i + 1 > photo.length - 1 ?
         i = 0 :
         i = i + 1;
     img.src = photo[i].image;
 }
*/

//- Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
/*
let stopWords=['js','react','angular'];
let words=document.querySelector('#words');
let btn=document.createElement('button');
btn.innerText='Click';
document.body.appendChild(btn);
 btn.onclick=()=>{
     for (let i = 0; i < stopWords.length; i++) {
         if(words.value===stopWords[i]){
             alert('Нецензурні слова');
         }
 }
}
*/
// Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
/*
let stopWords=['js','react','angular'];
let words=document.querySelector('#words');
let btn=document.createElement('button');
btn.innerText='Click';
document.body.appendChild(btn);
btn.onclick=()=> {
    for (let i = 0; i < stopWords.length; i++) {
       if( words.value.includes(stopWords[i])){
           alert('Нецензурні слова');
       }


    }
}
*/







