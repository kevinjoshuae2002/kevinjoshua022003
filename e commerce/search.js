var sidenav = document.querySelector(".side-navbar")

function shhow() {

    sidenav.style.display = "block"
    sidenav.style.left = "0"
}
function closee() {


    sidenav.style.left = "-60%"

}




















var productcontainer=document.getElementById("product")
var search=document.getElementById("search")
var productlist=productcontainer.querySelectorAll("div")
var s=document.querySelectorAll(".product-box")


search.addEventListener("keyup",function(event){
   var entervalue=event.target.value.toUpperCase()
   for(count=0;count<productlist.length;count=count+1)
   {
       
       var productname =productlist[count].querySelector("p").textContent
       if(productname.toUpperCase().indexOf(entervalue)<0)
       {
           productlist[count].style.display="none"

       }else{
           productlist[count].style.display="block"
       }
   }
})