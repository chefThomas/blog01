---
title: Hooks to save time and keep DRY
published: false
description: Another Hooks sales pitch, plus a lesser-discussed advantage to useState
tags: React, Hooks, custom Hook, useState, DRY, juniordev, hireme
cover_image: https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Algeria_Sahara_Desert_Photo_From_Drone_5.jpg/1200px-Algeria_Sahara_Desert_Photo_From_Drone_5.jpg
---

Plenty of blog posts and articles focusing on _Hook_ implementation have already been written, so rather than cover something that's already been done a million times, the goals of this post are to:

- Discuss a rationale for moving from Classes to Functions & Hooks.
- Demonstrate how to extract repeated logic into a custom Hook.

####Let's begin!
![Class component](https://dev-to-uploads.s3.amazonaws.com/i/1qchoz7nmvio7w698hw0.png)
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/jhyuoczy6rxqk3wffj4f.png)

####Reduce boilerplate
Compare the two components above which render identical DOM elements. Note how Function components require no constructor or render functions, and no `this`\* keyword (written 7 times in the Class component!) is required to bind `toggleMode()` or when calling methods to change `state`.

Unsure about `this`? Tyler McGinnis breaks it down very well [here](https://youtu.be/zE9iro4r918).

####Reduce decision-making overhead
Using only Function components reduces decision-making overhead simply because we never have to make a choice between Class and Function.

- Should this be a Function or Class component?
- Would refactoring this to a Class be a pain if I need to add state?
- Am I positive that it will always/never need state?

Prior to the release of the `useState` Hook, we had no choice but to use Classes for statefulness, but all of the questions above become moot once you've embraced the Function-Hook paradigm.

####Reduce refactoring
One of the more common implementation details that changes through the development cycle of React applications is the addition of state to a component. With Function-Hooks, you can immediately add state and skip the preliminary step of rewriting to Class.

####Reusing `useState` in a custom Hook
While the above reasons should be enough to convince Class adherents to jump ship, another BIG advantage of Hooks is that they are _re-usable_, which helps us keep solutions nice and [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

##### Example

Adding items to a shopping cart is a common usecase for state in ecommerce applications.

Take a moment to review code for the `FruitStand` component below, and we'll resume underneath when you're done. If you would like to follow along, the source code is available [here]()
![Fruit Stand UI](https://dev-to-uploads.s3.amazonaws.com/i/cg06an6a3cqs5s7h1tqy.png)

![Fruit Stand Component](https://dev-to-uploads.s3.amazonaws.com/i/rzm41dqsjn1emhlqg2w3.png)

If the repeated increment logic smells a little off 💩, that's a good sign! This is the redundant code that we will extract into a single custom Hook, `useIncrement`.

![custom hook, useIncrement](https://dev-to-uploads.s3.amazonaws.com/i/k50p1w07i14hp36riwpj.png)

A couple of details to note:

- Because there is no JSX, there is no need to import React.
- State and the function that changes it, `increment()`, are returned by the hook in an array and accessed by destructuring in the familiar `[foo, setFoo] = useHook(<initial value>)` pattern

####Reformatting FruitStand
Reformatting the component is very straightforward.

- Import `useIncrement`
- Remove the `useState` import
- Implement `useIncrement` for both fruit types at the top of the component.
- delete the redundant `incrementApples` and `incrementOranges` functions
- re-assign add button `onClick` to the state-setting functions of `useIncrement` for apples and oranges.

Here's the finished product
![reformatted fruit stand component](https://dev-to-uploads.s3.amazonaws.com/i/v2pen6y4pd5k8cow7jkg.png)

####Conclusion
This single component example is very simple, so the benefits of `useIncrement` might not be obvious, but I'm sure you can imagine a situation in the real world where extracting repeated logic would be beneficial.

Along with learning how to create a custom Hook, I hope I've made a strong case that Function components with `useState` have the potential to decrease development time in multiple ways, and provide a much cleaner and readable way to write stateful components.
