//select side navbar
var side_navbar=document.querySelector(".side-navbar");
function menu(){
    side_navbar.style.left="0";

}
function closeMenu()
{
    side_navbar.style.left="-60%";
}

var productContainer=document.getElementById("products")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")
search.addEventListener ("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(var i=0;i<productlist.length; i++)
    {
        var productname=productlist[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[i].style.display="none"
        }
        else{
            productlist[i].style.display="block"

        }
    }
})