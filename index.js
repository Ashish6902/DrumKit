for (var i = 0; i <= document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
            switch (this) {
                case w:
                    var audio = new Audio('sounds/crash.mp3')
                    audio.play();
                    break;
            
                default:
                    break;
            }
    });
}
   // var audio = new Audio('sounds/crash.mp3')
    //audio.play();
