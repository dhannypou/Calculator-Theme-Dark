const display = document.querySelector("#display")

const buttons = document.querySelectorAll("button")

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            display.innerText="";
        }else if(item.id=="backspace"){
            //aqui se coloca el boton que yo aprete como un string en el display
            let string = display.innerText.toString();
            //aqui borra de atras para adelante de a uno los string que tengo en el display
            display.innerText=string.substr(0,string.length-1);
            //aqui le doy la funcionalidad al igual
        }else if(display.innerText!="" && item.id=="equal"){
            display.innerText=eval(display.innerText);
        }else if(display.innerText=="" && item.id=="equal"){
display.innerText="null";
setTimeout(()=>(display.innerText=""),1000);
        }else {
            display.innerText+=item.id;
        }
    }
})

const themeToggleBtn = document.querySelector(".theme-toggler");

const calculator = document.querySelector(".calculator");

let isDark=true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark")
    themeToggleBtn.classList.toggle("active")
    isDark=!isDark
}