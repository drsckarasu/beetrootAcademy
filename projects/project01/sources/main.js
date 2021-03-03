const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);

$('.menu__link').on('click', function(){
  let section = $(this).attr('href')
  let top = $(section).offset().top
  $('html, body').animate({
    scrollTop: top
  }, 1500)
})

$(function() {
  let settings = {fixedNavigation:true};
  $('#gallery a').lightBox(settings);
});

$(document).ready(function() {
  $("#basic-form").validate({
    validClass: "valid success-alert",
  });
  $("#bottom-form").validate({
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

$('.footer_scroll').on('click', function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1500)
})

$(document).ready(function(){
  $('.recipes__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
  });
});