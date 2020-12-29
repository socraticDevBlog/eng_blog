---
title: JavaScript features to write quality code (part one)
date: 2020-12-28
author: "SocraticDev"
image: ../../images/javascript-blog.png
tags:
  - programming
---
JavaScript, this indispensable programming language on the web, arouses passions. On the one hand, there are fan boys and fan girls who feed on new features, libraries and frameworks. Versus the grumpy and the 'impassive' who tolerate ``JavaScript`` and are often limited to proven frameworks and libraries (like ``jQuery``).

Me? I consider myself an impartial and absolutely objective arbiter (hon! hon!)

Seriously, this interpreted and untyped language constantly bites our hindquarters by pushing us against:

- surprising behaviors;
- frustrating performances (compiling the blog of ``socraticDev`` under `` Windows™`` is so slow that I use a linux machine instead);
- and often mediocre code quality (developers are mostly at fault).

With the push for ``TypeScript``, ``ReactJS`` and ``nodeJS``, I am far from closing the door on taking part in projects using ``JavaScript`` as programming language. On the contrary, I recently attended (from the comfort of my couch) a lecture on modern 'JavaScript': ``Principles of Modern JavaScript: CodeMash`` by Joe Morgan. Following the hierarchy of principles guiding modern development, this developer from Kansas🇺🇸 discusses some features offered in ``JavaScript``.

##### Principles of modern code (ordered by importance)

1. Predictability;
2. Readability;
3. Simplicity;
4. Flexibility.

##### ``console.time``: a simple benchmarking built-in feature

Many new features allow code to be simplified: instead of declaring a loop or juxtaposing a few function calls, the language designers have integrated features that take care of everything. However, this turnkey approach is sometimes done to the detriment of performance.

In order to measure the performance of a piece of code, it suffices to precede the snippet with ``console.time ('I test X');`` and add ``console.timeEnd ('I test X');``. This will print the code execution time in milliseconds.

>```
console.time('testing n² loop');
for(var i=0; i<1000; i++) {
  for (var j=0; j<1000; j++) {
>    // do something
  }
}
console.timeEnd('testing n² loop');
>```

> Result:
>``VM173:7 testing n² loop: 6.541015625 ms``

##### Pipeline operator

Those familiar with the command line (e.g. ``bash``) will immediately understand the analogy with the pipe operator (``|``). In the ``gnu/linux`` and ``unix`` universe, we use this operator to pass the result (output) of a command as a parameter (input) to another command.

"The experimental pipeline operator (``|>``) (currently at stage 1) pipes the value of an expression into a function. This allows the creation of chained function calls in a readable manner. The result is syntactic sugar in which a function call with a single argument [...]"

>```
const double = (n) => n * 2;
const increment = (n) => n + 1;
>
>// without pipeline operator
>double(increment(5)); // 12
>
>// with pipeline operator
>5 |> increment |> double; // 12
>```

Before writing this, I've tried testing this new operator. In vain! Because this new operator is not yet supported by any browser. It is in proposal state but can be used via ``Babel``, the ``JavaScript`` compiler. This dependency can be easily installed via ``npm``.


##### Optional chaining
Optional type operator (``?``) is well-known to ``C#`` programmers. It lets us work safely with ``null`` or ``undefined`` values. Any action excuted against a ``undefined`` value generates an error and breaks code execution. In order to keep code simple, we appreciate chaining actions one after the other.

>```
>const character = {
>  name: 'Alice',
>  cat: {
>    name: 'Dinah'
>  }
>};
>var dogName = character.dog.name;
>
> Uncaught TypeError: character.dog is undefined
>``` 

If a character owns a pet but this pet is a cat, an error will be thrown and stop code execution. However, thanks to optional operator (``?``), we can avoid the exception and deal with the undefined value returned...

> ``var dogName = character.dog?.name;``

##### conclusion
There is no doubt that mastering modern ``JavaScript`` is a valuable skill. In a second part, we'll resume our exercise by talking about :

- ``conditional chaining``;
- ``spread`` operator;
- ``rest`` operator; 
- ``zip``, ``map``;
- and ``Object.FromEntries``.

###### sources

[https://www.tiobe.com/tiobe-index/](https://www.tiobe.com/tiobe-index/)

[https://www.pluralsight.com/courses/codemash-session-33](https://www.pluralsight.com/courses/codemash-session-33)

[https://www.geeksforgeeks.org/javascript-pipeline-operator/](https://www.geeksforgeeks.org/javascript-pipeline-operator/)