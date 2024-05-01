const inputBox = document.getElementById("myInput")
const tableList = document.getElementById("myUL")

function newElement()
{
    if(inputBox.value==='')
    {
      alert("Write something!");
    }
    else
    {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      tableList.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
tableList.addEventListener("click", function(e){
  if(e.target.tagName==="LI")
  {
      e.target.classList.toggle("checked");
      saveData();
  }
  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false)

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask()
{
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();