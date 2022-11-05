/*
========================================================================================================

// تابعی رو بیاین و بنویسید که دو تا مقدار رو بگیره و بعد مقدار ماکسیمم  اون رو برگردونه

function max( a ,  b) {    return a > b ? a : b;    }
  
========================================================================================================
  
// بده Buzz بر میگردونه و اگر اعداد بر 5 بخش پذیر بودن بیاد و  Fizz تابعی بنویسید که اعدادی رو که بر 3 بخش پذیر باشند رو بیاد و به ما رشته
 
function fizzBuzz(number) {
    if (typeof number !== "number") return "not a number";
    if (number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";
    return  number
}

========================================================================================================

//   تابعی بنویسید که بیاد و سرعت یک ماشین رو تست کنه اگر کمتر از 70 کیلومتر بر ساعت بود بیاد و بگه اکی و اگر بیشتر بود به اضای هر
// 5 کیلومتر بیشتری یک امتیاز منفی بده و موقعی  که تعداد این امتیاز ها بیاد و بیشتر از 12 تا بشه بیاد و بگه ساسپند یا مثلا ماشین ترکید

function speedCheck(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log("ok !");
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points < 12) console.log(points);
    else console.log("license  is   suspended");
}
console.log(speedCheck(95));

========================================================================================================

// بیاین و یک آبجکت رو درست کنید که ویژگی های زیر رو داشته باشه
//obj = { name :  ,  age :  ,    adress :   { city :   ,   country }}
//  روی کی های اون پیمایش انجام بده for in و یک تابع درست کنید که بیاد و با استفاده از


const userData = {
    name : "Emad",
    age : 25,
    adress : { city : "sena"  , country:"IR"}
}
function  showUser(user){
    for(let key   in user )  console.log(key, user[key])
}
showUser(userData)

========================================================================================================

//  بیاد و یک تابع بنویسید که دو تا مقدار بگیره و بیاد و بین اون مقادیر که گرفته پیمایش کنه
// یعنی اگر اومد و مقدار های 0 و 3 رو گرفت بیاد و از 0 تا عدد 3 رو در قالب یک آرایه برای ما
// بر گردونه

function formRange(min, max) {
    const output = [];
    for (let i = min; i < max; i++) output.push(i);
    return output;
}
const range = formRange(3, 10);
console.log(range);

========================================================================================================

//  بیا و یک شمارنده درست کن که 3 تا دکمه افزایش کاهش و ریست داشته باشه

const incrementBtn = document.querySelector(".increment");
const counterValue = document.querySelector(".counter span");
const decrementBtn = document.querySelector(".decrement");
const resetBtn = document.querySelector(".reset");

let count = 0;

function increment() {
    count++;
    counterValue.textContent = count;
}
incrementBtn.addEventListener("click", increment);

//

function decrement() {
    count--;
    counterValue.textContent = count;
}
decrementBtn.addEventListener("click", decrement);

//

function reset() {
    count = 0;
    counterValue.textContent = count;
}
resetBtn.addEventListener("click", reset);

 راه حل دوم 

const buttons = document.querySelectorAll(".btn");
const counterValue = document.querySelector(".counter  span");
let count = 0;
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const classList = btn.classList;
        if (classList.contains("increment")) count++;
        else if (classList.contains("decrement")) count--;
        else count = 0;
        if (count > 0) counterValue.style.color = "green";
        else counterValue.style.color = "red";
        counterValue.textContent = count;
    });
});

========================================================================================================

function composition : ترکیب کردن چند تا تابع پشت سر هم و به صورت تو در تو

let input = "   javascript     "
let outinput = "<div> + input.trim() +  </div>"

const trim = str => str.trim()
const ImInDiv = str=> `<div> ${str} </div>`
const toLowerCase = str => str.toLowerCase()

const result = ImpIbDiv(toLowerCase(trim(input)))

========================================================================================================
*/