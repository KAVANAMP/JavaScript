//Session storage - Session Storage stores data as key-value pairs for a single browser session. The data is cleared when the tab or browser is closed.
//Syntax ->sessionStorage.setItem("user", "Dhruthi");

sessionStorage.setItem('name','kavanapacharya')
sessionStorage.getItem('age',22)

sessionStorage.clear()
sessionStorage.removeItem('name')

let name=sessionStorage.getItem('name')
let age=sessionStorage.getItem('age')

document.writeln(`${name} ${age}`)