let btn=document.getElementById('btn1')
btn.addEventListener("click",function(){
    document.body.style.background="black"
    document.body.style.color="white"
})
let input=document.getElementById('ip1')
input.addEventListener("blur",()=>{
    input.value=input.value.toUpperCase()
})