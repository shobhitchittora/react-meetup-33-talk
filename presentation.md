---
title: Redux-saga
theme : black
revealOptions:
  transition: zoom
highlightTheme: darkula

---

## A saga of Redux-saga

<img src="https://redux-saga.js.org/logo/0800/Redux-Saga-Logo-Landscape.png"/ style="border: none; width: 50%; background: none;">

---

## About me

* Full Stack Enginner.
* @ NestAway Techonologies.
* Novice Open Source Contributor ( NodeJS, VSCode ).
* I ️ ❤️   everything JS.
* Design patterns nerd and book-worm 📒 🐛.

---

<a href="https://github.com/shobhitchittora" style="color: lightgrey; ">
<img src="https://assets-cdn.github.com/images/modules/logos_page/Octocat.png" style="width: 9%; margin: 0;  margin-right: 2%; margin-left: -4.8%; margin-top: 0%; border: none; background: none;"
/>
shobhitchittora</a>


<a href="https://twitter.com/shobhitchittora">
<img src="https://logos-download.com/wp-content/uploads/2016/02/Twitter_logo_bird_transparent_png.png" style="width: 5%; margin: 0;  margin-right: 2%; border: none; background: none;"
/>
@shobhitchittora</a>

<a href="https://stackoverflow.com/users/9255238/shobhit-chittora" style="color: orange; ">
<img src="https://streamdata.io/wp-content/uploads/2018/04/stack-overflow-orange.png" style="width: 5%; margin: 0; margin-right: 3.4%; border: none; background: none;"
/>
shobhit-chittora</a>

<a href="https://medium.com/@chittorashobhit" style="color: lightgreen; ">
<img src="http://www.stickpng.com/assets/images/5841c47ba6515b1e0ad75aa3.png" style="width: 6%; margin: 0; margin-top: 0%; margin-right: 3%; border: none; background: none;"
/>
@chittorashobhit</a>

---

<img style="width: 60%;" src="https://media.giphy.com/media/vLx0VBouiPZuCz0D0a/giphy.gif"/>

---

<img style="width: 60%;" src="https://media.giphy.com/media/39zN2zuc16xdpNuJ0W/source.gif"/>

---

<img style="width: 60%;" src="https://media.giphy.com/media/7E8yYUNt0pQSeZNt4Y/giphy.gif"/>

---

<img style="width: 60%;" src="https://media.giphy.com/media/l3q2Z6S6n38zjPswo/giphy.gif"/>

---

## What is Redux-saga ?

<p style="font-weight: bold; margin-top: 70px;"> &quot; Redux-saga is a side-effect management library for Redux applications. &quot; </p>

---

## Demo

---

### component
<img style="border: none; width: 80%;" src="./images/counter-index.png"/>

---

### Connect
<img style="border: none; width: 65%;" src="./images/counter-connect.png"/>

---

### Reducer

<img style="border: none; width: 70%;" src="./images/counter-reducer.png"/>

---

### saga
<img style="border: none; width: 70%;" src="./images/counter-saga.png"/>

---

### run
<img style="border: none; width: 65%;" src="./images/saga-run.png"/>


---

### test
<img style="border: none; width: 65%;" src="./images/counter-saga-test.png"/>

---

## What are side-effects ?

---

## What are Pure functions ? 

1. The function always returns the same result if the same arguments are passed in. (It does not depend on any state, or data, change during a program’s execution. It must only depend on its input arguments.)

2. The function does not produce any observable side effects such as network requests, input and output devices, or data mutation.

---

## What is a saga ?

<p style="font-weight: bold; margin-top: 70px;"> &quot; Sagas are implemented as Generator functions that yield objects to the redux-saga middleware. &quot; </p>

---

## Crash course - Generators

<p style="font-weight: bold; margin-top: 70px;"> &quot; The ```function*```  declaration defines a generator function, which returns a Generator object. 
 &quot; </p>

---

<img style="border: none; width: 65%;" src="./images/generator_101.png"/>

---

<p style="font-weight: bold; margin-top: 70px;"> &quot; Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.
 &quot; </p>

---

## What can this help me ? 

* Separation of concerns.
* Better testability.
* Readability.
* Co-location.
* Code sharing and re-use.

---

## Useful Effects


---

<h3 style="text-transform: none;">takeEvery</h3>

takeEvery(pattern, saga, ...args)

<img style="border: none; width: 65%;" src="./images/takeEvery.png"/>

---

<h3 style="text-transform: none;">takeLatest</h3>

takeLatest(pattern, saga, ...args)

* cancels any previous saga task started previous if it's still running.

<img style="border: none; width: 65%;" src="./images/takeLatest.png"/>

---

<h3 style="text-transform: none;">throttle</h3>

throttle(ms, pattern, saga, ...args)

<img style="border: none; width: 100%;" src="./images/throttle.png"/>

---

<h3 style="text-transform: none;">take</h3>

take(pattern)

<img style="border: none; width: 60%;" src="./images/take.png"/>

---

<h3 style="text-transform: none;">put</h3>

put(action)

<img style="border: none; width: 60%;" src="./images/put.png"/>

---

<h3 style="text-transform: none;">call</h3>

call(fn, ...args)

<img style="border: none; width: 60%;" src="./images/call.png"/>

---

<h3 style="text-transform: none;">fork</h3>

fork(fn, ...args)

### needs more explaining

---

<h3 style="text-transform: none;">spawn</h3>

spawn(fn, ...args)

### needs more explaining

---

<h3 style="text-transform: none;">select</h3>

select(selector, ...args)


---


<h3 style="text-transform: none;">race</h3>

race(effects)

<img style="border: none; width: 70%;" src="./images/race.png"/>

---

<h3 style="text-transform: none;">all</h3>

all([...effects]) 

<img style="border: none; width: 70%;" src="./images/all.png"/>

---

<h3 style="text-transform: none;">channel</h3>

channel([buffer])

---

<h3 style="text-transform: none;">eventChannel</h3>
eventChannel(subscribe, [buffer], [matcher])

---

<img style="width: 60%;" src="https://media.giphy.com/media/l0MYDGA3Du1hBR4xG/giphy.gif"/>

---

<!-- .slide: style="text-align: left;" -->
# THE END