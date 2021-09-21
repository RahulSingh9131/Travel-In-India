var searchBtn=document.querySelector('#search-btn');
var searchBar=document.querySelector('.search-bar-container');
var formBtn=document.querySelector('#login-btn');
var loginForm=document.querySelector('.login-form-container');
var formClose=document.querySelector('#form-close');
var menuBar=document.querySelector('#menu-bars');
var navBar=document.querySelector('.navbar');
var imgBtn=document.querySelectorAll('.img-btn');

window.onscroll= ()=>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');
    loginForm.classList.remove('active');
}
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active');
})

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');
})

menuBar.addEventListener('click',()=>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
})


imgBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('#image-slider').src=src;
    });
});

var swiper = new Swiper(".review-slider", {
    pagination: {
      el: ".swiper-pagination",
    }
  });


