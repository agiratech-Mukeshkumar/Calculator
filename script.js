let in_display = document.getElementById("display");

function insert(val){
    in_display.value+=val;
}
function calculate(){
    in_display.value = eval(in_display.value);
}

function clear_dis(){
    in_display.value="";
}   