var x=10;
var y=20;

function add(a,b)
{
    var c=10;
    return a+b;
}
console.log(add(10,20));



// language level - JS does not have data typesvar x = 10; // JavaSCript infers the data type based on assigned valueconsole.log("Type inferred for x = ", typeof x);var str = "hello";console.log("Type inferred for str = ", typeof str);var salary = 1034.78;console.log("Type inferred for salary = ", typeof salary);var flag = true;console.log("Type inferred for flag  = ", typeof flag);function add(a, b) {  var c = 10;  return a + b;}console.log("Type inferred for add = ", typeof add);// arraysvar colors = ["RED", "GREEN", "BLUE"];console.log("Type inferred for colors array  = ", typeof colors);console.log("Colors array ", colors);console.log("Length of array colors", colors.length);// array should have properties & methods// array -> properties - length// array -> method - filter(), forEach(), map(), push(), concat()

var x = 10; // JavaSCript infers the data type based on assigned value

console.log("Type inferred for x = ", typeof x);



var str = "hello";

console.log("Type inferred for str = ", typeof str);



var salary = 1034.78;

console.log("Type inferred for salary = ", typeof salary);



var flag = true;

console.log("Type inferred for flag  = ", typeof flag);



function add(a, b) {

  var c = 10;

  return a + b;

}

console.log("Type inferred for add = ", typeof add);

// arrays

var colors = ["RED", "GREEN", "BLUE"];

console.log("Type inferred for colors array  = ", typeof colors);

console.log("Colors array ", colors);

console.log("Length of array colors", colors.length);



// array should have properties & methods

// array -> properties - length

// array -> method - filter(), forEach(), map(), push(), concat()

const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length)


var person = {

    id: 100,
  
    name: "John",
  
    age: 34,
  
  };
  
  
  
  console.log("The type for person  - ", typeof person);
  
  // ES6 : string template syntax
  
  console.log(
  
    ` Person details - ${person.id}  :  ${person.name}  : ${person.age} `
  
  );