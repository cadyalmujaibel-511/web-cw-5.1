// السؤال الأول
// 1 
const name = "كادي";
// 2
let age = 16 ;
// 3 and 4
console.log("اسمي" +" "+ name +" "+"وعمري"+ age) ;
// 5 and 6
age = age*5;
console.log(age)
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// السؤال الثاني
// 1
let hobbies = ["ركوب الدراجة","البرمجة","الغناء"]
// 2
hobbies.push(16)
hobbies[4] = 16
console.log(hobbies)
console.log(hobbies.length)
// 3
hobbies.pop()
console.log(hobbies)
// 4
let student = {
    track: "مسار الويب",
    language: "JavaScript"
}
// 5
student["TAs"] = ["نانسي","موضي","حسين","رهف"]
console.log(student)
// 6
console.log(student["track"])
console.log(student.track)
// 7
console.log(student["TAs"][0])
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// البونص
// 1
student["sayHello"] = function() {console.log("مرحبًا")}
console.log(student)
// 2
student["sayHello"]()
student["sayHello"]()
// console results => console.png
