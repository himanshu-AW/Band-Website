let menu = document.querySelector("#more");
let menuHide = document.querySelector(".more-bar");

// menu  show and hide functionality
menu.addEventListener("mouseover", () => {
    menuHide.classList.remove("more-hide");
});
menu.addEventListener("mouseleave", () => {
    menuHide.classList.add("more-hide");
});

// automatic slide change functionality
let myIdx = 0;
autoImgChange();

function autoImgChange(){
    const images = document.getElementsByClassName("img-slide");
    let i;
    for(i =0 ;i<images.length;i++){
        images[i].style.display = "none";
    }
    myIdx++;
    if(myIdx>images.length){
        myIdx = 1;
    }
    images[myIdx-1].style.display = "block";
    setTimeout(autoImgChange,3000);
}

