$(document).ready(function(){
  $('.header__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,          
  });
});

$('.header_scroll').on('click', function() {
  let proj = document.getElementById("projects");
  let down = $(proj).offset().top
  $('html, body').animate({
    scrollTop: down
  }, 1000)  
})

let lastId,
  topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight(),
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function () {
    let item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

menuItems.click(function (e) {
  let href = $(this).attr("href"),
    offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 22;
  $("html, body").stop().animate(
    {
      scrollTop: offsetTop
    },
    1000
  );
  e.preventDefault();
});

$(window).scroll(function () {
  let fromTop = $(this).scrollTop() + topMenuHeight;

  let cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });

  cur = cur[cur.length - 1];
  let id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;

    menuItems
      .parent()
      .removeClass("active")
      .end()
      .filter("[href='#" + id + "']")
      .parent()
      .addClass("active");
  }

  let scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $(".navigation").addClass("scrolled");
  } else {
    $(".navigation").removeClass("scrolled");
  }
});

$(function() {
  var settings = {fixedNavigation:true};
  $('#gallery a').lightBox(settings);
});


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("image");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("choosen");
    current[0].className = current[0].className.replace(" choosen", "");
    this.className += " choosen";
  });
}
