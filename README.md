# JavaScript Concepts — Complete Guide

A structured reference covering core to advanced JavaScript concepts, from basics to browser APIs.

---

## Table of Contents

1. [Basic JavaScript](#1-basic-javascript)
2. [var, let, const](#2-var-let-const)
3. [Datatypes](#3-datatypes)
4. [Scopes](#4-scopes)
5. [Strict Mode](#5-strict-mode)
6. [Conditions](#6-conditions)
7. [Loops](#7-loops)
8. [DOM](#8-dom)
9. [DOM Methods](#9-dom-methods)
10. [DOM Properties](#10-dom-properties)
11. [DOM Events](#11-dom-events)
12. [addEventListener](#12-addeventlistener)
13. [JSON](#13-json)
14. [JSON Methods](#14-json-methods)
15. [Ajax](#15-ajax)
16. [Fetch API](#16-fetch-api)
17. [Promises](#17-promises)
18. [Types of Promises](#18-types-of-promises)
19. [Async and Await](#19-async-and-await)
20. [Event Propagation](#20-event-propagation)
21. [Spread and Rest Operators](#21-spread-and-rest-operators)
22. [Storage](#22-storage)
23. [Timers](#23-timers)
24. [Polyfill](#24-polyfill)
25. [Convert Text To Speech](#25-convert-text-to-speech)
26. [Camera](#26-camera)

---

## 1. Basic JavaScript

JavaScript is a high-level, interpreted, single-threaded scripting language used to make web pages interactive. It runs in the browser (via an engine like V8) and on the server (Node.js).

```html
<script>
  console.log("Hello, JavaScript!");
</script>
```

**Key traits:**
- Dynamically typed
- Prototype-based OOP
- First-class functions
- Event-driven, non-blocking (via the event loop)

---

## 2. var, let, const

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Re-declaration | Allowed | Not allowed | Not allowed |
| Re-assignment | Allowed | Allowed | Not allowed |
| Hoisting | Hoisted, initialized as `undefined` | Hoisted, in "temporal dead zone" | Hoisted, in "temporal dead zone" |

```js
var a = 10;   // function-scoped, avoid using
let b = 20;   // block-scoped, reassignable
const c = 30; // block-scoped, constant reference

if (true) {
  let x = 1;
  console.log(x); // 1
}
// console.log(x); ❌ ReferenceError
```

> `const` doesn't make objects immutable — it only prevents reassignment of the variable itself.

```js
const obj = { name: "Kavana" };
obj.name = "Updated"; // ✅ allowed
obj = {};              // ❌ not allowed
```

---

## 3. Datatypes

JavaScript has **primitive** and **non-primitive (reference)** types.

**Primitives** (immutable, stored by value):
- `Number`
- `String`
- `Boolean`
- `Undefined`
- `Null`
- `Symbol`
- `BigInt`

**Reference types** (stored by reference):
- `Object`
- `Array`
- `Function`

```js
let num = 42;              // Number
let str = "hello";         // String
let bool = true;           // Boolean
let u;                     // Undefined
let n = null;              // Null
let sym = Symbol("id");    // Symbol
let big = 123n;            // BigInt
let arr = [1, 2, 3];       // Object (Array)
let obj = { a: 1 };        // Object

console.log(typeof num);   // "number"
console.log(typeof arr);   // "object"
console.log(typeof null);  // "object" (famous JS quirk)
```

---

## 4. Scopes

Scope determines where a variable is accessible.

- **Global Scope** — accessible everywhere
- **Function Scope** — accessible only inside the function
- **Block Scope** — accessible only inside `{ }` (with `let`/`const`)

```js
let globalVar = "I'm global";

function demo() {
  let functionVar = "I'm function-scoped";
  if (true) {
    let blockVar = "I'm block-scoped";
    console.log(globalVar, functionVar, blockVar); // all accessible
  }
  // console.log(blockVar); ❌ not accessible here
}
```

**Closures** — a function remembers variables from its enclosing scope even after that scope has finished executing.

```js
function counter() {
  let count = 0;
  return function () {
    return ++count;
  };
}
const increment = counter();
console.log(increment()); // 1
console.log(increment()); // 2
```

---

## 5. Strict Mode

`"use strict"` enables a stricter parsing and error-handling mode, catching silent errors and disabling unsafe features.

```js
"use strict";

x = 10; // ❌ ReferenceError: x is not defined (without strict mode, this silently creates a global)
```

**Benefits:**
- Prevents accidental globals
- Throws errors on assignment to read-only properties
- Disallows duplicate parameter names
- `this` is `undefined` in standalone functions instead of pointing to the global object

---

## 6. Conditions

Control the flow of execution based on logical checks.

```js
let score = 85;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// Ternary operator
let status = score >= 40 ? "Pass" : "Fail";

// switch statement
switch (true) {
  case score >= 90:
    console.log("A");
    break;
  default:
    console.log("Other");
}
```

---

## 7. Loops

Used to repeat a block of code.

```js
// for loop
for (let i = 0; i < 5; i++) console.log(i);

// while loop
let i = 0;
while (i < 5) { console.log(i); i++; }

// do...while (executes at least once)
let j = 0;
do { console.log(j); j++; } while (j < 5);

// for...of — iterates over iterable values (arrays, strings)
for (const val of [10, 20, 30]) console.log(val);

// for...in — iterates over object keys
for (const key in { a: 1, b: 2 }) console.log(key);
```

---

## 8. DOM

The **Document Object Model** is a tree-like representation of an HTML page that JavaScript can read and manipulate.

```
document
 └── html
      ├── head
      └── body
           ├── h1
           └── div
```

```js
console.log(document.title);
console.log(document.body);
```

The DOM turns static HTML into a live structure JS can query, update, add to, or remove from.

---

## 9. DOM Methods

Methods used to **select** and **manipulate** elements.

```js
document.getElementById("myId");
document.getElementsByClassName("myClass");
document.getElementsByTagName("div");
document.querySelector(".myClass");        // first match
document.querySelectorAll("div");          // all matches (NodeList)

// Creating & modifying elements
const el = document.createElement("p");
el.textContent = "Hello!";
document.body.appendChild(el);

document.body.removeChild(el);
el.remove();

// Cloning
const clone = el.cloneNode(true);
```

---

## 10. DOM Properties

Properties let you read/set data on DOM elements.

```js
const heading = document.querySelector("h1");

heading.textContent   // gets/sets text only
heading.innerHTML     // gets/sets HTML content
heading.innerText     // like textContent, but respects CSS visibility

heading.style.color = "blue";
heading.className = "title";
heading.classList.add("active");
heading.classList.remove("active");
heading.classList.toggle("active");

heading.id;
heading.getAttribute("data-info");
heading.setAttribute("data-info", "value");
```

---

## 11. DOM Events

Events are actions that happen in the browser — clicks, key presses, page loads, etc.

**Common events:** `click`, `dblclick`, `mouseover`, `mouseout`, `keydown`, `keyup`, `submit`, `change`, `load`, `resize`, `scroll`

```html
<button onclick="alert('Clicked!')">Click Me</button>
```

```js
// Inline HTML attribute (not recommended for large apps)
button.onclick = function () {
  console.log("Button clicked");
};
```

---

## 12. addEventListener

The preferred way to attach events — allows multiple listeners on the same element.

```js
const btn = document.querySelector("#myBtn");

btn.addEventListener("click", function (event) {
  console.log("Clicked!", event);
});

// Arrow function version
btn.addEventListener("click", (e) => console.log(e.target));

// Removing a listener (function must be named/referenced)
function handleClick() { console.log("Handled"); }
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);

// Options
btn.addEventListener("click", handleClick, { once: true }); // fires only once
```

---

## 13. JSON

**JSON (JavaScript Object Notation)** is a lightweight, text-based data format used to exchange data between a client and a server.

```json
{
  "name": "Kavana",
  "role": "SDE",
  "skills": ["JavaScript", "Kotlin", "React"],
  "isAvailable": true
}
```

**Rules:**
- Keys must be double-quoted strings
- No trailing commas
- Values: string, number, boolean, null, array, object

---

## 14. JSON Methods

Convert between JS objects and JSON strings.

```js
const obj = { name: "Kavana", age: 22 };

// Object → JSON string
const jsonStr = JSON.stringify(obj);
console.log(jsonStr); // '{"name":"Kavana","age":22}'

// JSON string → Object
const parsed = JSON.parse(jsonStr);
console.log(parsed.name); // "Kavana"

// Pretty printing
JSON.stringify(obj, null, 2);

// Excluding keys
JSON.stringify(obj, ["name"]); // only includes "name" key
```

---

## 15. Ajax

**AJAX (Asynchronous JavaScript and XML)** allows you to send/receive data from a server without reloading the page. Traditionally done with `XMLHttpRequest`.

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data", true);

xhr.onload = function () {
  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
};

xhr.onerror = function () {
  console.error("Request failed");
};

xhr.send();
```

> Modern JS mostly replaces `XMLHttpRequest` with the `fetch()` API (see next section), but AJAX is the underlying concept both rely on.

---

## 16. Fetch by Ajax

The **Fetch API** is the modern, Promise-based way to make HTTP requests (replacing `XMLHttpRequest`).

```js
fetch("https://api.example.com/data")
  .then(response => {
    if (!response.ok) throw new Error("Network error");
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

// POST request
fetch("https://api.example.com/data", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Kavana" })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 17. Promises

A **Promise** represents the eventual result of an asynchronous operation — it can be `pending`, `fulfilled`, or `rejected`.

```js
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) resolve("Data loaded!");
    else reject("Error loading data");
  }, 1000);
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Done"));
```

---

## 18. Types of Promises

Beyond the basic Promise, JS provides combinator methods for handling multiple promises:

```js
// Promise.all — waits for ALL to resolve; rejects if any one fails
Promise.all([p1, p2, p3])
  .then(results => console.log(results));

// Promise.allSettled — waits for ALL, regardless of success/failure
Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results)); // [{status, value/reason}, ...]

// Promise.race — resolves/rejects as soon as ONE settles
Promise.race([p1, p2, p3])
  .then(result => console.log(result));

// Promise.any — resolves as soon as ONE fulfills; rejects only if ALL fail
Promise.any([p1, p2, p3])
  .then(result => console.log(result));
```

| Method | Resolves when | Rejects when |
|---|---|---|
| `all` | All succeed | Any one fails |
| `allSettled` | All settle (success or fail) | Never |
| `race` | First one settles | First one is a rejection |
| `any` | First one succeeds | All fail |

---

## 19. Async and Await

Syntactic sugar over Promises, making asynchronous code look synchronous.

```js
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();

// async functions always return a Promise
async function greet() {
  return "Hello";
}
greet().then(msg => console.log(msg)); // "Hello"
```

---

## 20. Event Propagation

Describes the order in which events travel through nested DOM elements. Has three phases:

1. **Capturing phase** — event travels from `window` down to the target
2. **Target phase** — event reaches the actual target element
3. **Bubbling phase** — event bubbles back up from target to `window`

```html
<div id="parent">
  <button id="child">Click</button>
</div>
```

```js
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
// Clicking button logs: "Child clicked" → "Parent clicked" (bubbling, default)
```

**Stopping propagation:**
```js
child.addEventListener("click", (e) => {
  e.stopPropagation(); // prevents bubbling to parent
});
```

**Event delegation** (using bubbling to your advantage):
```js
document.getElementById("parent").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    console.log("A button inside parent was clicked");
  }
});
```

**Capturing example:**
```js
parent.addEventListener("click", () => console.log("capture phase"), { capture: true });
```

---

## 21. Spread and Rest Operators

Both use `...` syntax but serve opposite purposes.

**Spread** — expands an iterable into individual elements.

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1 };
const obj2 = { ...obj1, b: 2 }; // { a: 1, b: 2 }

function sum(a, b, c) { return a + b + c; }
console.log(sum(...[1, 2, 3])); // 6
```

**Rest** — collects multiple elements into an array/object.

```js
function sumAll(...numbers) {
  return numbers.reduce((acc, n) => acc + n, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 10

const [first, ...rest] = [1, 2, 3, 4];
console.log(first, rest); // 1 [2, 3, 4]

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a, others); // 1 { b: 2, c: 3 }
```

---

## 22. Storage

Browser APIs to store data on the client side.

| Feature | `localStorage` | `sessionStorage` | Cookies |
|---|---|---|---|
| Persistence | Until manually cleared | Until tab closes | Configurable expiry |
| Capacity | ~5-10MB | ~5-10MB | ~4KB |
| Sent to server | No | No | Yes (with every request) |

```js
// localStorage
localStorage.setItem("username", "Kavana");
console.log(localStorage.getItem("username"));
localStorage.removeItem("username");
localStorage.clear();

// sessionStorage (same API, cleared on tab close)
sessionStorage.setItem("token", "abc123");

// Storing objects (must stringify)
localStorage.setItem("user", JSON.stringify({ name: "Kavana" }));
const user = JSON.parse(localStorage.getItem("user"));
```

---

## 23. Timers

Functions that schedule code execution.

```js
// setTimeout — runs once after a delay
const timeoutId = setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);

clearTimeout(timeoutId); // cancels it before it fires

// setInterval — runs repeatedly at an interval
const intervalId = setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);

clearInterval(intervalId); // stops the repetition

// requestAnimationFrame — optimized for smooth animations
function animate() {
  console.log("frame");
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
```

---

## 24. Polyfill

A **polyfill** is code that implements a feature in browsers that don't natively support it — bridging the gap for older environments.

```js
// Polyfill for Array.prototype.includes
if (!Array.prototype.includes) {
  Array.prototype.includes = function (searchElement) {
    return this.indexOf(searchElement) !== -1;
  };
}

// Polyfill for Array.prototype.map
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
}

console.log([1, 2, 3].myMap(x => x * 2)); // [2, 4, 6]
```

> Tools like **Babel** and libraries like **core-js** automate polyfilling for production apps.

---

## 25. Convert Text to Speech

Uses the browser's built-in **Web Speech API** (`SpeechSynthesis`) to read text aloud.

```js
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 1;    // speed
  utterance.pitch = 1;   // pitch
  window.speechSynthesis.speak(utterance);
}

speak("Hello, this is text to speech in JavaScript");

// Listing available voices
window.speechSynthesis.getVoices().forEach(voice => {
  console.log(voice.name, voice.lang);
});

// Stopping speech
window.speechSynthesis.cancel();
```

---

## 26. Camera

Accessing the device camera uses the **MediaDevices API** (`getUserMedia`).

```html
<video id="video" autoplay></video>
```

```js
const video = document.getElementById("video");

navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => console.error("Camera access denied:", err));

// Capturing a photo from the video stream
function capturePhoto() {
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);
  const imageData = canvas.toDataURL("image/png");
  console.log(imageData);
}

// Stopping the camera stream
function stopCamera(stream) {
  stream.getTracks().forEach(track => track.stop());
}
```

> Requires HTTPS (or `localhost`) and user permission.

---

## Summary

| # | Topic | Category |
|---|---|---|
| 1-7 | Basics, variables, datatypes, scope, strict mode, conditions, loops | Core JS |
| 8-12 | DOM, methods, properties, events, listeners | DOM Manipulation |
| 13-14 | JSON & JSON methods | Data Format |
| 15-19 | Ajax, Fetch, Promises, Promise types, Async/Await | Asynchronous JS |
| 20-21 | Event propagation, Spread/Rest | Advanced Patterns |
| 22-26 | Storage, Timers, Polyfill, Text-to-Speech, Camera | Browser APIs |

---

*Built as a structured JavaScript learning reference — from fundamentals to browser-level APIs.*
