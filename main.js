let box1 = document.getElementsByClassName("box")[0]
let box = document.getElementsByTagName("p")[0]
let select = document.getElementById("select")
let p = document.getElementById("p")
let m = document.getElementById("m")
let dark = document.getElementsByClassName("dark")[0]

dark.onclick = () => {
box1.classList.toggle("darkmode")

}

document.body.onchange = function() {
    box.style = `font-family : ${select.value} `
    
}
let num = 20

p.onclick = () => {
    num += 5 ;
    action()
}

m.onclick = () => {
    num -= 5
    action()
}


function action(){
    if(num < 50){
        box1.style.fontSize = `${num}px`  
        p.style = "opacity: 100% ; cursor : pointer; align-items : center" 
    }else if(num = 50){
        p.style = "opacity: 20%;cursor:not-allowed;" 

    }
    
   let n = document.getElementById("number")
    n.textContent = num
    
    if(num > 20){
        box1.style.fontSize = `${num}px`      
        m.style = "opacity: 100%; cursor : pointer" 
    }else if (num = 20){
        m.style = "opacity: 20%;cursor:not-allowed;" 

    }
}