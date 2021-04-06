# JavaScript: Understanding the Weird Parts

## Rochelle Roberts Crain

## Description: 
 I want to have a deeper understanding of JavaScript. I learned JS primarily through developing web and mobile apps, so while I am fluent in JavaScript, I do want to go deeper in how JavaScript works and fill in those knowledge gaps. 

## Topics:
* Execution Contexts
  - contexts are created by the JS engine
  - outermost context known as the Global Execution Context
  - each context has a global object, a 'this' variable and a reference to its outer environment
  - Phase 1: Creation, "Hoisting" 
    - allocate memory space for functions and variables
    - functions are defined --the code exists in memory
    - variables are set to undefined --a placeholder
  - Phase 2: Execution
    - code runs line by line
    - JS is single threaded and synchronous in its behavior
  - Invoking a function creates its own new execution context
    - pushed onto the execution stack then popped after finished running



