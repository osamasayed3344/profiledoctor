const articledetailsbtn=document.querySelectorAll(".bodypage .list_article .item button");

for(i=0; i<articledetailsbtn.length; i++){
    articledetailsbtn[i].onclick=function(){
        window.open("articledetails.html");
    }
}