/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Window/Global Object binding
* 2.Implicit Binding
* 3.New Binding 
* 4.Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1
// WINDOW AND GLOBAL OBJECT BINDING
const greet = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting}! I'm ${name} :D`);
      console.log(this);
    }
  };
  greet.sayHello('Joshua');
//
// Principle 2
//IMPLICIT BINDING
const myName = obj => {
    obj.sayName = function() {
      console.log(`Hello my name is ${this.name}`);
      console.log(this);
    };
  };
  const me = { name: 'Joshua' };
  myName(me);
  me.sayName();
//
// Principle 3
// NEW BINDING
function greetAgain(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new greetAgain('Joshua');
  jerry.speak();

// Principle 4
//EXPLICIT BINDING
function greet1 () {
    console.log(`Hello, my name is ${this.name}`)
  }
  
  const user = {
    name: 'Joshua',
    age: 27,
  }

  greet1.call(user)
