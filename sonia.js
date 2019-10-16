document.getElementById("link1").addEventListener('click',
function(){
    document.getElementById("photo1").style.display='block';
   /* document.getElementById("photo2").style.display='none';
    document.getElementById("photo3").style.display='none';
    document.getElementById("photo4").style.display='none';
    document.getElementById("photo5").style.display='none'; */
    $("#photo1").siblings().css({display: ""});
    document.getElementById("link1").style.backgroundColor = "#b8f5d4"; 
  
    $("#link1").siblings().css({backgroundColor: ""});
});

document.getElementById("link2").addEventListener('click',
function(){
    document.getElementById("photo2").style.display='block';
    document.getElementById("photo1").style.display='none';
    document.getElementById("photo3").style.display='none';
    document.getElementById("photo4").style.display='none';
    document.getElementById("photo5").style.display='none';
    /*$("#photo2").siblings().css({display: ""});*/
    document.getElementById("link2").style.backgroundColor = "#b8f5d4";
    
    $("#link2").siblings().css({backgroundColor: ""});
});

document.getElementById("link3").addEventListener('click',
function(){
    document.getElementById("photo3").style.display='block';
    document.getElementById("photo2").style.display='none';
    document.getElementById("photo1").style.display='none';
    document.getElementById("photo4").style.display='none';
    document.getElementById("photo5").style.display='none';
    /*$("#photo3").siblings().css({display: ""});*/
    document.getElementById("link3").style.backgroundColor = "#b8f5d4";
    $("#link3").siblings().css({backgroundColor: ""});
});

document.getElementById("link4").addEventListener('click',
function(){
    document.getElementById("photo4").style.display='block';
    document.getElementById("photo2").style.display='none';
    document.getElementById("photo3").style.display='none';
    document.getElementById("photo1").style.display='none';
    document.getElementById("photo5").style.display='none';
  /*  $("#photo4").siblings().css({display: ""});*/
    document.getElementById("link4").style.backgroundColor = "#b8f5d4";
    $("#link4").siblings().css({backgroundColor: ""});
});


document.getElementById("link5").addEventListener('click',
function(){
    document.getElementById("photo5").style.display='block';
    document.getElementById("photo2").style.display='none';
    document.getElementById("photo3").style.display='none';
    document.getElementById("photo4").style.display='none';
    document.getElementById("photo1").style.display='none';
   /* $("#photo5").siblings().css({display: ""}); */
    document.getElementById("link5").style.backgroundColor = "#b8f5d4";
    $("#link5").siblings().css({backgroundColor: ""});
});