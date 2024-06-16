const inputbox=document.getElementById("input-text");
const listcontainer=document.getElementById("list-container");
function addTask()
{
    if(inputbox.value=='')
        {
            alert("Please Add Task");
        }
        else{
            let li=document.createElement("li");
            li.innerHTML=inputbox.value;
            listcontainer.appendChild(li);
            inputbox.value='';
            let span=document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        inputbox.value="";
        savedata();
}
listcontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");savedata();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();savedata();
    }
}, false);
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();