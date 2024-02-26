function CustomScroll(){

    function ScrollH(e){
        e.preventDefault();
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        this.scrollLeft -= (delta * 40);
    }

    var mobile_width = 1024;
    const nodeList_fullscreen = document.querySelectorAll(".scrollable-full-screen");
    const nodeList_mobile = document.querySelectorAll(".scrollable-mobile");
    
    if (window.innerWidth > mobile_width){

        for (let i = 0; i < nodeList_fullscreen.length; i++){
            nodeList_fullscreen[i].addEventListener("mousewheel", ScrollH, false);
            nodeList_fullscreen[i].addEventListener("DOMMouseScroll", ScrollH, false);
        }

        for (let i = 0; i < nodeList_mobile.length; i++){
            nodeList_mobile[i].removeEventListener("mousewheel", ScrollH, false);
            nodeList_mobile[i].removeEventListener("DOMMouseScroll", ScrollH, false);
        }
        
    } 
    else {

        for (let i = 0; i < nodeList_fullscreen.length; i++){
            nodeList_fullscreen[i].removeEventListener("mousewheel", ScrollH, false);
            nodeList_fullscreen[i].removeEventListener("DOMMouseScroll", ScrollH, false);
        }

        for (let i = 0; i < nodeList_mobile.length; i++){
            nodeList_mobile[i].addEventListener("mousewheel", ScrollH, false);
            nodeList_mobile[i].addEventListener("DOMMouseScroll", ScrollH, false);
        }
    }

}

document.addEventListener("DOMContentLoaded", function() {
    CustomScroll()
}); 


window.addEventListener('resize', function(event) {
    // alert('New size: ' + window.innerWidth);
    CustomScroll();
}, true);


