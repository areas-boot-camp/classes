# Day 12
- Today we’ll be looking at how to store data locally (local storage).
- `localStorage.`
- `.getItem` (store), `.setItem` (retrieve).
- You find some of this information in the “Application” tab (Inspect Element).
- And it’s the “Storage” tab in Safari.
- `.setItem("key", value)`
- You kind of have to know how you store local storage (there doesn’t appear to be a analog to console.log).
---
- localStorage only takes primitives (not object, for example).
- Can use JSON to work with objects.
- JSON contains strings and booleans. It only accepts double quotes.
- JSON.stringify can help convert.
- JSON.parse is also another handy function.
- For example, you can take a JS object and convert to JSON to store it in localStorage!
---
- What’s an init function?
- What’s a break point. Use `debugger`?
- Should review the difference between .textContent and .innerHTML.
- trim() removes space, for example comment.value.trim().
---
- What is a blur? For a form, or something else?
---
- For mini project, start by writing a list and breaking into small tasks.
- Put button on page.
- When button clicked, change "startGame" to true.
- Build list of 10 words (array).
- When game starts, select a random word from array and save it to "guessWord".
- Create location on page to display guess.
- Create and style the "blank non-guessed letter" element.
- Once the word is guessed, empty out the guess location element (innerHTML = "").
- Create a new, blank, non-guessed letter element for every letter in the word, then add to the guess location.
- Attach key listener to document (keydown).
- Take the code that build the non-guessed letter elements and move that to a function called "buildGuessUI".
- Create an array to store the user guesses at the top level.
- When the key listener fires, if it is a normal key (not like an array key)...
