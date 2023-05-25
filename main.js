//створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let rectangle =(a, b) => a*b;


console.log(rectangle(10, 20));

//- створити функцію яка обчислює та повертає площу кола з радіусом r
let areaOfCircle=(r) => 3.14*r*r ;


console.log(areaOfCircle(4));;
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinder= (r,h) => 2*3.14*r*h + 2*3.14*r*r;

console.log(cylinder(7, 12));;
// - створити функцію яка приймає масив та виводить кожен його елемент
let iter=(array) => {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
}
let arr=[1,2,3,5,6,7,89,0,10,22];
iter(arr);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let writter=(textContent)=> {
    document.write(<p>`${textContent}</p>)

}
writter('text');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let unOrderList=(someText)=> {
    document.write(<ul>
        <li>`${someText}`</li>
        <li>`${someText}`</li>
        <li>`${someText}`</li>
    </ul>)


}
// unOrderList(`someText`);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let unOrderList=(someText,list)=> {
    document.write(`<ul>`)
    for (let i = 0; i < list; i++) {
        document.write(`<li>${someText}</li>`)

    }
    document.write(`</ul>`)
}
unOrderList(`some`,3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arr =[1,2,3,5,'okten',true,false];
let filtered=(item)=>{
    for (const itemElement of item) {
        document.write(`<ul>`);
        document.write(`<li>${itemElement}</li>`);
        document.write(`</ul>`);

    }
}
filtered(arr);
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let obj = [
    {id: 1,
    name: 'Vasya',
    age: 18},
    {id: 2,
        name: 'Max',
        age: 12},
    {id: 3,
        name: 'Ann',
        age: 28}
]
let objFilter=(item)=>{
    for (const itemElement of item) {
        document.write(`<div>${itemElement.name}:${itemElement.id}:${itemElement.age}</div>`)

    }
}
objFilter(obj);
// - створити функцію яка повертає найменьше число з масиву
let arr = [1,2,3,4,5,-6,22,55,-666,111,22,-22,10,19,3.14,];
let calc = (value)=>{
    let calc=value[0]
    for (let i = 0; i < value.length; i++) {
        if (calc >value[i]){
            calc=value[i];
        }

    }
    return calc
}
console.log(calc(arr));
//
//
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
let sum=(arr)=> {
    let result = 0;
    for (const arrElement of arr) {
        return  result+=arrElement;

    }

}

console.log(sum([1,2,3]));
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250