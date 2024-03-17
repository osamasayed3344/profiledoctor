const imgs=document.querySelectorAll(".bodypage .slider .list_imgs img");

let index=0;
slider_fun();
function slider_fun(){
    if(index<imgs.length){
        if(index>0){
            imgs[index-1].style.display="none";
        }
        imgs[index].style.display="block";
    }
    else{
        imgs[index-1].style.display="none";
        index=0;
        imgs[index].style.display="block";
    }
    index++;
    setTimeout(slider_fun,5000);
}

