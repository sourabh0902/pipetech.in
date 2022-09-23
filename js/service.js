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

$('.one').waypoint(function(direction) {
        $('.one').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    
  $('.two').waypoint(function(direction) {
        $('.two').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
 $('.three').waypoint(function(direction) {
        $('.three').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    
  $('.four').waypoint(function(direction) {
        $('.four').addClass('animated fadeInRight');
    }, {
        offset: '50%'
    });
 $('.five').waypoint(function(direction) {
        $('.five').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    $('.six').waypoint(function(direction) {
        $('.six').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    

$('.seven').waypoint(function(direction) {
        $('.seven').addClass('animated fadeInLeft');
    }, {
        offset: '50%'
    });
    