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