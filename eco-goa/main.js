//import styles
import '../sass/main.scss';

//import html pages into bundle
import '../index.html';

//import gallery pages into bundle
import '../src/gallery.html';


import '../src/contact.html'
import '../src/images/dirtywater.png'
function run() {
  
      console.log('running');
      var d = new Date();
      document.getElementById("demo").innerHTML = d;
  
  }
  
  
 window.onload = run();
 
 //slideshow
 var slideIndex = 1;
 showSlides (slideIndex);
 
 function plusSlides(n){
       showSlides(slideIndex += n);
 }
 
 function currentslide(n) {
       showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
       var i;
       var slides= document.getElementsByClassName("mySlides");
       var dots= document.getElementsByClassName("dot");
       if (n > slides.length) {slideIndex = 1}
       if (n< 1) {slideIndex = slides.length}
       for (i = 0; i < slides.length; i++) {
             slides[i].style.display ="none";
       }
       
       for (i=0; i < dots.length; i++) {
             dots[i].className = dots[i].className.replace("active","");
       }
       slides[slideIndex-1].style.display = "block";
       dots[slideIndex-1].className += "active";
 }
