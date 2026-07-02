//It helps to conver mistake into error
//It must be written at the beginning of a script or function.

//Strict Mode at Script Level
"use strict";
x = 10;
console.log(x); // x is not defined - prevents creation of dlobal variables automatically

//Strict Mode Inside a Function -> You can enable strict mode only inside a function.
function test(){

    "use strict";

    x = 20;

    console.log(x);

}


test();//reference error - Only that function runs in strict mode

//Prevents Creating Global Variables Accidentally
"use strict";

function add(){

    value = 100;

}

add();//reference error

//Prevents Duplicate Parameters
"use strict";

function add(a,a){

} //syntax error
