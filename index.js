var btn = document.getElementById("btn-click")
var mainDiv = document.querySelector("header div")



function onBtnClick() {
    mainDiv.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + " )"


    // var randomNum = Math.floor(Math.random() * 255)
    // alert("rgb("+ randomNum +","+ 45 + ","+155 +" )") //alert("rgb("+ Math.floor(Math.random() * 255) +","+ Math.floor(Math.random() * 255) + ","+Math.floor(Math.random() * 255) +" )")
    // mainDiv.style.backgroundColor = "lightcoral" //change background color once 
}
//btn.onclick = onBtnClick  // first method using event properties 
btn.addEventListener('click', onBtnClick) // second method using addEvent listener