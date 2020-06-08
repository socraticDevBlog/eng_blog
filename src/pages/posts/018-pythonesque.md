---
title: "Write code now then ask for forgiveness"
date: 2020-06-06
author: "SocraticDev"
image: ../../images/pythonesque.png
tags:
  - programming
---

Programming in Python requires us to modify our conception of _good programming_ practices. In enterprise-grade softwares, we aim for application stability and robustness. While the context where we favor the Python language is different. Python is perfectly suited for proofs of concept, automating processes through scripting, etc. In short, when coding in Python, we tend to go fast in order to get immediate results. Some companies boost their development potential by taking advantage of the flexibility of the language invented by Guido van Rossum. This allows them to quickly arrive at an ``MVP`` (minimally viable product). When the project has proven itself, then we recode everything in a enterprise-grade programming language such as ``C++``, ``C#`` or ``Java``.

Python is a popular programming language in education. Being a high-level language, you don't get lost in low-level technical details such as explicit typing or memory space management. For example, memory management is automatically taken care of by a garbage collector and the variables are dynamically typed. That is, a variable takes the type of the value that is initially assigned to it.

> ``my_duck = Duck() `` is an object of class Duck </br>
> </br>
> ``my_duck = 'Palmipede bird (anatidae), with broad beak, long and pointed wings.'`` is a variable of type _string_

#### 'Duck Typing' in Python

Python, like JavaScript, is not a compiled language. In general, the compilation process allows us to detect different errors in the syntax of the code. In interpreted languages, we have to wait to run the code for errors to appear. For example, in a compiled language, at build, the compiler will immediately detect an error if we use the AmericanDuck class rather than the EuropeanDuck class. However, both implement a 'fly' method! The Python interpreter doesn't care about the type of a variable. As long as the 'fly' method can be executed: everything is OK.

> "If I see a bird that flies like a duck, quacks like a duck, and swims like a duck, then I call this bird a duck"
>
> <cite> - James Whitcomb Riley </cite>

In the following case, we see that Python executes the code without worrying about the type of arguments passed in parameters to the ``calculate(a, b, c)`` function.

>``def calculate(a, b, c) => return (a+b)*c`` </br>
> </br>
> ``a = calculate(1, 2, 3)``</br>
> ``b = calculate('apples ', 'and oranges, ', 3)``</br>
> </br>
> ``print(a)`` </br>
> ``print(b)``</br>
> </br>
> 9 </br>
> "apples and oranges, apples and oranges, apples and oranges, "``

#### EAFP vs LBLY

The example above demonstrates how Python interprets the ``calculate`` function in two different ways. If the arguments are ìntegers, then it proceeds to an arithmetic operation. If the arguments are strings, then it does a string concatenation and a loop.

Generally, the programmer knows what he is doing and masters his code. When an error occurs, it is ... an exception! The good practice of Python is to avoid weighing down the code with preliminary validations. For example, we could verify that the arguments are indeed whole numbers. If we do a division, we will take the trouble to check that the divider is not zero, etc.

All these validations are not _pythonesques_. That is, they do not follow Python best practices. In Python, we want to go fast, we want an ultra simple and easy to read code. To do this, we adopt the `` EAFP`` principle: it is easier to ask for forgiveness than to ask for permission ('Easier to ask forgiveness than permission'). Thus, the structure of the ``try except`` is prevalent in any pythonesque code base. We run the code freely and, when it breaks, we get and handle the exception.`

> ``try:`` </br>
> &nbsp;&nbsp;&nbsp;    ``x = my_dict["key"]``</br>
> ``except KeyError:``</br>
> &nbsp;&nbsp;&nbsp;    ``manage_error('item doesn't exist')``

Programmers have traditionally used to validate the arguments received as parameters before using them. It is also a good practice of the languages ​​``C#`` and ``Java``! As far as possible, in enterprise software, we do not use ``Exceptions`` as decision structures ... We adopt a principle of prudence that Pythonians call: ``LBYL`` (' Look Before You Leap '). That is to say: look ahead before leaping.

The following example would rage a Pythonician because the code is a little more complex and less efficient: we look twice in the dictionary! However, this way of doing things respects the rules of the art in business.

> ``if "key" in my_dict:``</br>
> &nbsp;&nbsp;&nbsp;     ``  x = my_dict["key"]``</br>
> ``else:`` </br>
> &nbsp;&nbsp;&nbsp;     ``manage_error('item doesn't exist')``

``Translated from french by Google Translate``

##### Source

[https://stackoverflow.com/questions/11360858/what-is-the-eafp-principle-in-python](https://stackoverflow.com/questions/11360858/what-is-the-eafp-principle-in-python)

[https://www.wikiwand.com/en/Python_(programming_language)](https://www.wikiwand.com/en/Python_(programming_language))

[http://eikke.com/how-not-to-write-python-code/index.html](http://eikke.com/how-not-to-write-python-code/index.html)