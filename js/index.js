function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("navbar").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}


$(window).scroll(function(){
    if($(this).scrollTop()>300){
    $('.navbar').addClass("sticky");
}             
else
    {
        $('.navbar').removeClass("sticky")
    }
                 })

$(window).scroll(function(){
    if($(this).scrollTop()>300){
    $('.pit').addClass("stickyp");
}             
else
    {
        $('.pit').removeClass("stickyp")
    }
                 })
$(window).scroll(function(){
    if($(this).scrollTop()>300){
    $('.home').addClass("stickyv");
}             
else
    {
        $('.home').removeClass("stickyv")
    }
                 })



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slider");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}
      
