//Local Storage -it stores data permanently in the browser until:

/*
You delete it manually.
JavaScript removes it.
The user clears browser data.

Even if you close the browser and reopen it, the data is still available.
-or-
Local Storage is a browser storage mechanism that stores data as key-value pairs with no expiration time.
*/

//Syntax ->localStorage.setItem("name", "Dhruthi");

localStorage.getItem('volume',33)
localStorage.setItem('playing',true)

localStorage.clear()

localStorage.removeItem('playing')

let volume=localStorage.getItem('volume')
let isPlaying=localStorage.getItem('playing')

document.write(`${volume} ${isPlaying}`)