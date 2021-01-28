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
});

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
  let settings = {fixedNavigation:true};
  $('#gallery a').lightBox(settings);
});


filterSelection("all")
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("image");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    let current = document.getElementsByClassName("choosen");
    current[0].className = current[0].className.replace(" choosen", "");
    this.className += " choosen";
    $(".image").removeClass("first");
  });
}

function initMap() {
  let ternopil = new google.maps.LatLng(49.542,25.616);

  let mapCanvas = document.getElementById("map");
  let mapOptions = {
    center: ternopil,
    zoom: 12,
    disableDefaultUI: true,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  };
  let map = new google.maps.Map(mapCanvas,mapOptions);

  let myCity = new google.maps.Circle({
    center: ternopil,
    radius: 100,
    strokeColor: "#FF0000",
    strokeOpacity: 0.2,
    strokeWeight: 100,
    fillColor: "#FF0000",
    fillOpacity: 0.4,
  });
  myCity.setMap(map);

  google.maps.event.addListener(myCity,'click',function() {
    let pos = map.getZoom();
    map.setZoom(15);
    map.setCenter(myCity.getPosition());
    window.setTimeout(function() {map.setZoom(pos);},3000);
  });

  let url;
  $("#map").on('click', function () {
  url = "https://www.google.com/maps?z=15&t=m&q=loc:49.542+25.616";
  window.open(url, '_blank');
  });
}

$(document).ready(function() {
  $("#basic-form").validate({
    validClass: "valid success-alert",
  });
});

document.addEventListener('DOMContentLoaded', navigation)

function navigation(){
    const burger = document.querySelector('.navigation__content_burger');
    const navigation = document.querySelector('.navigation__content');
    burger.addEventListener('click', ()=>{
        navigation.classList.toggle('shown');
    })
}