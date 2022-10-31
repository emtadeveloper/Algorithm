// ======================================================================================================= 
/*  1  //

یک تابع بنویسید که بیاد و یک رشته رو به عنوان ورودی بگیره و هر حرف یک رشته رو با حروف بعدی اش تو الفبا جایگزین کنه و بر گردونه

/* راه حل من  */

// const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
// "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// const  changeStr = (str)=>{
//   let finalStr = str.trim()
//   const strToArray = [...finalStr];
//   strToArray.map((char)=>{
//    let index =   alphabet.findIndex((str)=> str === char)
//    if(index == 25)  index = -1
//    if(index == 51)  index = -1
//    finalStr = finalStr.replace(char, alphabet[index+1])
//   })
//   return finalStr
// }

// console.log(changeStr("emad" ))  // fnbe

//  راه حل برتر

// function LetterChanges(text) {
//   let s = text.split('');
//   for (var i = 0; i < s.length; i++) {
//     switch (s[i]) {
//       case ' ':
//         break;
//       case 'z':
//         s[i] = 'a';
//         break;
//       case 'Z':
//         s[i] = 'A';
//         break;
//       default:
//         s[i] = String.fromCharCode(1 + s[i].charCodeAt(0));
//     }
//   }
//   return s.join('');
// }
// console.log(LetterChanges("PYTHON")); //QZUIPO
// console.log(LetterChanges("W3R")); //X4S
// console.log(LetterChanges("phpA")); //qiq

// ======================================================================================================= 
// ======================================================================================================= 
/*  2  //‌

حداقل ۳ تا کاراکتر فاصله هست یا نه b و a یک تابع جاوا اسکریپتی بنویسید که یک رشته رو به عنوان ورودی بگیره و چک کنه که آیا بین حرف 

/* راه حل من  */

// const checkStr = (str) => {
//   const indexAU = str.indexOf("A")
//   const indexAL = str.indexOf("A")
//   const indexBU = str.indexOf("B")
//   const indexBL = str.indexOf("b")
//   if( indexBL - indexAL >= 3)  return "true"
//   if( indexBU - indexAU >= 3)  return "true"
//   if( indexBL - indexAU >= 3)  return "true"
//   if( indexBU - indexAL >= 3)  return "true"
//   return "false"
// }

// console.log(checkStr("Alab")) // true
// console.log(checkStr("Ala")) // false

//  راه حل برتر

//  میایم و از ریجکس و استفاده از متد تست استفاده میکنیم


// ======================================================================================================= 
// ======================================================================================================= 
/*  2  //‌

حداقل ۳ تا کاراکتر فاصله هست یا نه b و a یک تابع جاوا اسکریپتی بنویسید که یک عدد رو به عنوان ورودی بگیره و چک کنه که آیا بین حرف 

/* راه حل من  */

// const checkDiffrenceNumber = (num) => {
//   const array = +[...num.toString()]
//   let max = +array[0];
//   let min = +array[0];
//   array.map((number) => {
//     +number > max && (max = +number);
//     +number < min && (min = +number)
//   })
//   return max - min
// }

// console.log(checkDiffrenceNumber(23)) //   1 
// console.log(checkDiffrenceNumber(109634634632)) //    1
// console.log(checkDiffrenceNumber(17))//    6


//  راه حل برتر


// const checkDiffrenceNumber = (num) => {
//   var strArr = [...num.toString()].map(function (e) { return Number(e) });
//   return Math.max(...strArr) - Math.min(...strArr)
// }

// console.log(checkDiffrenceNumber(23)) //   1 
// console.log(checkDiffrenceNumber(109634634632)) //    1
// console.log(checkDiffrenceNumber(17))//    6


// =======================================================================================================
// =======================================================================================================
/*  3  //‌

یک تابع جاوا اسکریپتی بنویسید که یک تاریخ رو به عنوان ورودی بگیره و با تاریخ امروز مقایسه کنه
و به صورت زیر چاپ کنه
اگر تاریخ برای امروز بود باید اینطوری خروجی داشته باشه
امروز ۹ آبان ۱۴۰۱
دیروز ۸ آبان ۱۴۰۱
سه شنبه ۱۴ فروردین ۱۴۰۱

/* راه حل من  */

// const DAY_MILLISECONDS = 60 * 60 * 24 * 1000;

// const DataPickers = (data) => {
//   const todayData = new Date().getTime()
//   const rtf = new Intl.RelativeTimeFormat('fa', { numeric: 'auto', });
//   const faDateDay = new Intl.DateTimeFormat("fa", { day: "numeric" })
//   const faDateYear = new Intl.DateTimeFormat("fa", { year: "numeric" })
//   const faDateMounth = new Intl.DateTimeFormat("fa", { month: "long" })
//   const faDateWeeknd = new Intl.DateTimeFormat("fa", { weekday: "long" })
//   const daysDifference = Math.round(todayData - data) / DAY_MILLISECONDS
//   let finalVal = ` ${faDateDay.format(data)} ${faDateMounth.format(data)} ${faDateYear.format(data)} `
//   if (daysDifference < 1) {
//     return finalVal = rtf.format(0, "day") + finalVal
//   }
//   if (daysDifference < 2) {
//     return finalVal = rtf.format(-1, "day") + finalVal
//   }
//   return faDateWeeknd.format(data) + finalVal
// }
// console.log(DataPickers(new Date("2022-08-15").getTime()));

// console.log(DataPickers(new Date("2022-08-30").getTime()));

// // ️ yesterday
// console.log(DataPickers(new Date("2022-10-30").getTime()));

// // ️ today
// console.log(DataPickers(new Date().getTime()))


// ======================================================================================================= 
// =======================================================================================================
/*  4  //‌

بکنه Duplicated یک تابع بنویسید که یک تابع بگیره و اون رو 

const duplicatedArray = arr => arr.concat(arr)

console.log(duplicatedArray([1, 2, 3, 4, 5]));

/* راه حل من  */

// ======================================================================================================= 
// =======================================================================================================
/*  5  //‌


/* راه حل من  */

// ======================================================================================================= 


