(function($) { 
    document.addEventListener("DOMContentLoaded", () => { 
      
      $('nav ul li a:not(:only-child)').click(function(e) {
        this.siblings('.nav-dropdown').toggle();
        
        document.getElementByClassName("nav-dropdown").not(this.siblings()).style.display = "none";
        e.stopPropagation();
      });
      
      $('html').click(function() {
        document.getElementByClassName("nav-dropdown").style.display = "none";
      });
      
      document.getElementById("nav-toggle").click(function() {
        $('nav ul').slideToggle();
      });
      
      document.getElementById("nav-toggle").addEventListener('click', (e) => {
        this.classList.toggle('active');
      });
    }); 
  });