//1.JSON.stringify() - All the normal elements are converted into strings -or- converts javascript object into a JSON string.
//Syntax - JSON.stringify(value)
let student={
    name:"Krudha",
    age:12
};
let jsonData=JSON.stringify(student);
console.log(jsonData);
console.log(typeof student);
console.log(typeof jsonData);


//2.JSON.parse() - Converts a JSON string into a javascript object.
//Syntax - JSON.parse(jsonString)
let jsonData1='{"name":"Rahul","age":21}';
let student1=JSON.parse(jsonData1);
console.log(student1);
console.log(typeof jsonData1);
console.log(typeof student1);
