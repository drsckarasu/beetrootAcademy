$(document).ready(function(){
  $('.header__slider').slick({
    arrows: false,
    dots: true,          
  });
});

$('.menu__link').on('click', function(){
  let section = $(this).attr('href')
  let top = $(section).offset().top
  $('html, body').animate({
    scrollTop: top
  }, 1500)  
})

$('.header_scroll').on('click', function() {
  let proj = document.getElementById("projects");
  let down = $(proj).offset().top
  $('html, body').animate({
    scrollTop: down
  }, 1500)  
})

let lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    
    menuItems = topMenu.find("a"),
    
    scrollItems = menuItems.map(function(){
      let item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


menuItems.click(function(e){
  let href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});


$(window).scroll(function(){
   
   let fromTop = $(this).scrollTop()+topMenuHeight;
   
   let cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   cur = cur[cur.length-1];
   let id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;

       menuItems
         .parent().removeClass("active")
         .end().filter("[href='#"+id+"']").parent().addClass("active");
   }  
   
   let scroll = $(window).scrollTop();

  if (scroll >= 60) {
      $(".navigation").addClass("scrolled");
  } else {
      $(".navigation").removeClass("scrolled");
  }
});
