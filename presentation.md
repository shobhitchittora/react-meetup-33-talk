---
title: Redux-saga
theme : black
revealOptions:
  transition: zoom
highlightTheme: darkula

---

## A saga of Redux-saga

<img src="https://redux-saga.js.org/logo/0800/Redux-Saga-Logo-Landscape.png"/ style="border: none; width: 50%; background: none;">

<aside class="notes">
		Hi everyone! How are you doing today. 
    Let's have quick round of applause for the all the speakers today and the organizers, who help bring together such a great community.
</aside>

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


<aside class="notes">
		Let's start with a real life story. And mind me it really happened.
    <br/>
    So in an alternate universe our beloved Barney Stinson is a JS Developer. And one day his boss comes to him and tell him that we're gonna start a new project. It'll all be glorious and they're gonna build it on React , Redux, GraphQL and other cool tech out there.

</aside>

---

<img style="width: 60%;" src="https://media.giphy.com/media/39zN2zuc16xdpNuJ0W/source.gif"/>

<aside class="notes">
		And so Barney happily started coding. He was the building components like crazy. Blazing fast page loads and all.
    He was in his full glory. 
    <br/>
    But slowly as more people joined the project, more requirements were realized, he was like - 
</aside>

---

<img style="width: 60%;" src="https://media.giphy.com/media/7E8yYUNt0pQSeZNt4Y/giphy.gif"/>

<aside class="notes">
		Soon his project became un-readable and hard to reason about. Random things used to break down and Barney was chasing ghosts.
    It was all very frustrating.
</aside>

---

## What is Redux-saga ?

<img style="width: 90%;" src="./images/redux-saga-github.png"/>

<p style="font-weight: bold; margin-top: 70px;"> &quot; Redux-saga is a side-effect management library for Redux applications. &quot; </p>



<aside class="notes">
		I know the definition can be confusing with all the jargons in it, but don't worry we're gonna talk about all of them in a few minutes. I'll give you the dictionary definition.😎
</aside>

---

## Demo

<aside class="notes">
		Let's quickly jump into a small demo which will introduce you to all the moving parts which we're gonna talk about today. 
</aside>

---

<img style="width: 60%; border: none;" src="./images/counter-ex.gif"/>

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

<p style="font-weight: bold; margin-top: 70px;">
&quot;
a function modifies some state outside its scope or has an observable interaction with its calling functions
&quot;
</p>

---

What are considered side-effects ?

* Network calls
* Actions dispatched
* Reading from state outside the scope of a component

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

<h3 style="text-transform: none;">select</h3>

select(selector, ...args)

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

### Useful Patterns

---

<h3 style="text-transform: none;">fork tasks</h3>

<img style="border: none; width: 70%;" src="./images/filters-fork.png"/>

---

<h3 style="text-transform: none;">waitFor</h3>

<img style="border: none; width: 70%;" src="./images/waitFor.png"/>

---

<h3 style="text-transform: none;">External events</h3>

<img style="border: none; width: 80%;" src="./images/external-events.png"/>

---

<h3 style="text-transform: none;">Error Handling</h3>

<img style="border: none; width: 60%;" src="./images/error-handling.png"/>

---

<h3 style="text-transform: none;">debounce</h3>

<img style="border: none; width: 70%;" src="./images/debounce.png"/>

---

<h3 style="text-transform: none;">Retry XHR</h3>

---

<img style="border: none; width: 50%;" src="./images/retry-xhr.png"/>

---

## What can this help me ? 

* Separation of concerns.
* Better testability.
* Readability.
* Co-location.
* Code sharing and re-use.

---

<img style="width: 70%; border: none;" src="https://media.giphy.com/media/l0MYDGA3Du1hBR4xG/giphy.gif"/>

---

<!-- .slide: style="text-align: left;" -->
# THE END