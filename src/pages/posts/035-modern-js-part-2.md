---
title: JavaScript features to write quality code (part 2)
date: 2021-01-23
author: "SocraticDev"
image: ../../images/javascript-blog-two.png
tags:
  - programming
is_archived: true
---

Let's resume our discovery of some nice JavaScript features.

##### Spread operator
The _Spread operator_ transforms an Array into a list. In itself it is not a revolution. But it enriches the language in the sense that it simplifies your code by taking advantage of this functionality. This operator consists of an ellipsis (``...``) placed in front of the name of the variable containing the array.

>```
> const presidents = ['Clinton', 'Obama'];
>
> // updating an Array
> const updatedPresidents = [...presidents, 'Biden'];
>
> const billionaires = ['Gates', 'Bezos', 'Zuckerberg'];
> const foreigners = ['Putin'];
>
> // blend-in multiple arrays
> const passengers = [...presidents, ...billionaires, ...foreigners];
>

##### Rest parameters
"The rest parameters allows to represent an indefinite number of arguments in the form of an array". This simplifies long-term code maintenance because you can add more arguments to the function call without having to change the function's signature.

>```
>function sum(...theArgs) {
>  return theArgs.reduce((previous, current) => {
>    return previous + current;
>  });
>}
>
>console.log(sum(1, 2, 3));
>// expected output: 6
>
>console.log(sum(1, 2, 3, 4));
>// expected output: 10

##### using functions as data structures
JavaScript's flexibility allows us to write code that is more readable and easier to modify. By taking advantage of these new features added to the language over time, we see a trend emerging: high-level functions become first-class citizens. We speak of high level in terms of high level of abstraction: the function concretely describes the final result while sparing us the technical details of implementation.

In doing so, one is encouraged to use functions as if they were data. In the object-oriented programming paradigm, the object was the high-level expression of data ... at a price in terms of complexity. Here, in JavaScript, we are rather encouraged to encapsulate processing on raw data in a function. Then, transfer the function containing all the processing logic. It's out of the ordinary, but it opens up vast opportunities in terms of readability, flexibility, and testability.

For example, you are asked to implement a small system to optimize the offer of psychological assistance to children whose schooling path has been disrupted by the COVID 19 pandemic. Instead of wasting your time determining ... how to determine ( !) the criteria specific to a 'COVID child', you will be able to use the function variable ``covidChildren`` and start the development of your system. Subsequently, you will be able to modify the implementation as you wish without having to modify the code downstream.

>```
>const covidChildren = retrieveContactInfos(...[...elementaryKids, ...highschoolKids]);
>
> function subscribeToPsychologicalHelp(covidChildren);
>```

##### conclusion
I believe these two new operators are sufficient for now. To properly judge their value and usefulness, it is good to compare their use with the equivalent code to obtain the same result.

Therefore, well talk about the ``Map()``, ``zip()`` and ``Object.FromEntries()`` functions in a third part!

##### sources
[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
