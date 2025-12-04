---
title: "I want to be functional"
date: 2022-03-26
author: "SocraticDev"
image: ../../images/closure-blog.png
tags:
  - programming
is_archived: true
---

I wasn't taught `functional programming` in school. Workplaces didn't use it explicitely. Nevertheless, I've been intrigued about this other way of programming for some times.

Now that I have time and motivation, I've picked up a reliable book about it: [Michael Fogus(2013), Functional Javascript: Introducting Functional Programming with Underscore.js](https://www.oreilly.com/library/view/functional-javascript/9781449360757/)

Learning starts when ackowledging your ignorance about a topic. It is a humbling moment that should be used as a springboard to self-improvement.

## basic concepts

`Functional programming` differs from imperative and object-oriented programming. Its basic element is the function. It encourages another way of programming softwares. "Programs are constructed by applying and composing functions". Instead of explicitely programming steps in which a running state is modified by the program, functional programming is a "declarative programming paradigm in which function definitions are trees of expressions that map values to other values"

`First-class functions` are a prerequisite to functional programming. When we say a programming language has first-class functions, it means that the language lets us use function as a variable. A functional programming language lets us assign a function to a variable, let's us pass a function as arguments to other functions, and let's us return a function as a value returned from another function. Moreover, in functional programming a function name doesn't matter. We most likely gonna use anonymous functions: a function without name:

> `const squared = (a) => a * a`

`variables scope` is fundational. It has many definitions but you can't go wrong by defining scope as the "lifetime" of a variable. 

Other definitions (close to JavaScript realm):

- The value of the `this` binding
- The execution context defined by the value of the `this` binding
- The variable value resolution scheme, or the lexical bindings

`Variable binding` is something that is above my understand for the moment. I think knowing about the behavior of variables within global and lexical scopes is a must for a programmer. If you need something stronger, go study `Dynamic Scoping`!

`Closures` is where functional programming gets really interesting. A closure is writing a function to capture variables in its scope and "package it" in a function that retains the values for use in a different scope. 

To me, from the get go, it's an awesome solution to a common real life programming problem: when you had access to a variable, but not anymore. With a closure, you can return a function containing the values you need where you don't have access to them anymore.

>Operationally, a closure is a record storing a function[a] together with an environment.[1] The environment is a mapping associating each free variable of the function (variables that are used locally, but defined in an enclosing scope) with the value or reference to which the name was bound when the closure was created.[b] Unlike a plain function, a closure allows the function to access those captured variables through the closure's copies of their values or references, even when the function is invoked outside their scope. (Wikipedia, "closure")

### example of leveraging closure
```
function createScaleFunction(FACTOR) {
  return function(v) {
    return _.map(v, function(n) {
      return (n * FACTOR);
    });
  };
}

var scale10 = createScaleFunction(10);

scale10([1,2,3]);
//=> [10, 20, 30]
```

## learnings

Digging into functional programming I discover a lot about my lack of understanding into some programming language (especially `JavaScript`) basic fonctions such as variable binding and scoping. I'm also learning to understand about functions chaining. Which was/is a big pet peeve of mine: it's not fun debugging function chains. No??

Nexst steps will be getting into `higher-order functions`, `function-building functions` and `currying`, `immutability`, and `flow-based programming`. 

Cannot wait!

## sources

[https://www.oreilly.com/library/view/functional-javascript/9781449360757/](https://www.oreilly.com/library/view/functional-javascript/9781449360757/)

[https://www.wikiwand.com/en/Functional_programming](https://www.wikiwand.com/en/Functional_programming)  

[https://en.wikipedia.org/wiki/First-class_function](https://en.wikipedia.org/wiki/First-class_function)  

[https://www.wikiwand.com/en/Closure_(computer_programming)](https://www.wikiwand.com/en/Closure_(computer_programming))
