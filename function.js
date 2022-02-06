// Javascript is an prototype based object oriented language

// Naming convention for variables & functions (methods) - camel case

// local function

// declaration of function



function nameInUpperCase(str) {

    // Every string value in JS is treated as String object
  
    return str.toUpperCase();
  
  }
  
  
  
  // invocation of function
  
  var result = nameInUpperCase("hello");
  
  // ES6 - string template syntax
  
  console.log(`Value in  uppercase ${result}`);
  
  // ES5
  
  console.log("Value in Upper Case", result);