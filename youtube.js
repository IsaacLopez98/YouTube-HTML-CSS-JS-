var is_big_menu = true;
var is_mode_overlay = false;

setScreenMode();

var busqueda = document.getElementById('buscar');
busqueda.addEventListener('focus', function(){
    document.getElementsByClassName('icono')[0].style.display = "flex";
    busqueda.parentNode.style.border = "1px solid #0a59b2";
})
busqueda.addEventListener('focusout', function(){
    document.getElementsByClassName('icono')[0].style.display = "none";
    busqueda.parentNode.style.border = "1px solid #ccc";
})


var icono_bar = document.getElementById('icono-bar');
icono_bar.addEventListener('click',function(){

  var ancho_viewport = window.innerWidth;
  if(ancho_viewport<=1100){

    if(is_mode_overlay==false){
        var bigMenu = document.getElementById('big-menu');
        bigMenu.classList.remove('ocultar');
        bigMenu.classList.add('is-mode-overlay');
        document.getElementById('bar-lateral').style.width = '240px';
        document.getElementById('bar-lateral').style.zIndex = '7';
        document.getElementById('big-menu').style.backgroundColor = '#fff';

        is_mode_overlay = true;
    }
    else{
        var bigMenu = document.getElementById('big-menu');
        bigMenu.classList.remove('is-mode-overlay');
        bigMenu.classList.add('ocultar');

        is_mode_overlay = false;
    }
  }else{

    if(is_big_menu==true){
        var bigMenu = document.getElementById('big-menu');
        bigMenu.classList.add('ocultar');

        var littleMenu = document.getElementById('little-menu');
        littleMenu.classList.remove('ocultar');
    
        document.getElementById('bar-lateral').style.width = '70px';
    
    
        var videos = document.getElementById('videos');
        videos.classList.add('max-width-videos');
        is_big_menu = false;
    }else{
        var bigMenu = document.getElementById('big-menu');
        bigMenu.classList.remove('ocultar');

      var littleMenu = document.getElementById('little-menu');
      littleMenu.classList.add('ocultar');
    
        document.getElementById('bar-lateral').style.width = '240px';
    
    
        var videos = document.getElementById('videos');
        videos.classList.remove('max-width-videos');
        is_big_menu = true;
    } 
  }    
})


var videos = document.getElementsByClassName('item');
for(var i = 0; i < videos.length;i++){
    
    var video = videos[i];
    video.setAttribute('onmouseenter','bigItem(this)');
    video.setAttribute('onmouseleave','normalItem(this)');
}
    



window.addEventListener("resize", function() {
    setScreenMode();
  });

function setScreenMode(){
  var ancho_viewport = window.innerWidth;

  if(ancho_viewport<=1100){
      var bigMenu = document.getElementById('big-menu');
      bigMenu.classList.add('ocultar');

      var littleMenu = document.getElementById('little-menu');
      littleMenu.classList.remove('ocultar');
  
      document.getElementById('bar-lateral').style.width = '70px';
  
      var videos = document.getElementById('videos');
      videos.classList.add('max-width-videos');
      is_big_menu = false;
  } else{
      var bigMenu = document.getElementById('big-menu');
      bigMenu.classList.remove('ocultar');
  
      document.getElementById('bar-lateral').style.width = '240px';
  
  
      var videos = document.getElementById('videos');
      videos.classList.remove('max-width-videos');
      is_big_menu = true;

      var littleMenu = document.getElementById('little-menu');
      littleMenu.classList.add('ocultar');
  }
}