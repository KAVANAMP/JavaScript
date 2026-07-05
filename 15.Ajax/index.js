function loads(){
     let request=new XMLHttpRequest()
     request.open('GET','./index.txt')
     request.send()
     request.onload=()=>{
        let para=document.getElementById('p1')
        para.innerText=request.responseText
     }
}