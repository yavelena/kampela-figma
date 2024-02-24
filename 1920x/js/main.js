function CustomScroll(){

    function ScrollH(e){
        e.preventDefault();
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
        document.querySelector(class_name).scrollLeft -= (delta * 40);
    }

    var mobile_width = 1024;
    var class_name = (window.innerWidth > mobile_width) ? ".scrollable-full-screen" : ".scrollable-mobile";
    // alert('CustomScroll: ' + window.innerWidth + ' class name: ' + class_name);

    document.querySelector(".scrollable-full-screen").removeEventListener("mousewheel", ScrollH, false);
    document.querySelector(".scrollable-full-screen").removeEventListener("DOMMouseScroll", ScrollH, false);
    document.querySelector(".scrollable-mobile").removeEventListener("mousewheel", ScrollH, false);
    document.querySelector(".scrollable-mobile").removeEventListener("DOMMouseScroll", ScrollH, false);
    
    if (document.querySelector(class_name).addEventListener){
        document.querySelector(class_name).addEventListener("mousewheel", ScrollH, false);
        document.querySelector(class_name).addEventListener("DOMMouseScroll", ScrollH, false);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    CustomScroll()
}); 


window.addEventListener('resize', function(event) {
    // alert('New size: ' + window.innerWidth);
    CustomScroll();
}, true);


