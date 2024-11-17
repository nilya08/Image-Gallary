let scrollContainer = document.getElementById("gallary");
let nextbtn = document.getElementById("nextbtn");
let backbtn = document.getElementById("backbtn");


scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.style.scrollBehavior= "auto";
    scrollContainer.scrollLeft += evt.deltaY;
});

nextbtn.addEventListener("click",(evt)=>{
    scrollContainer.style.scrollBehavior= "smooth";
    scrollContainer.scrollLeft += 900;
})

backbtn.addEventListener("click",(evt)=>{
    scrollContainer.style.scrollBehavior= "smooth";
    scrollContainer.scrollLeft -= 900;
})
