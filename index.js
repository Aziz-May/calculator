
let x ="" ; 
function displayy(button){
    let display=document.getElementById("display");
    display.value+=button.value ;
}
function allclear(_){
    let display=document.getElementById("display") ; 
    display.value="" ;
}
function del(_){
    let display=document.getElementById("display") ; 
    display.value=display.value.slice(0,-1 ) ;

}
function result(_){
    let display=document.getElementById("display") ; 
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }


}