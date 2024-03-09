function CustomScroll(){

    function ScrollH(e){
        var mobile_width = 1024;
        let scrollSpeed = 30;
        if (window.innerWidth<mobile_width && !this.classList.contains("for-full-screen")
        || window.innerWidth>=mobile_width && !this.classList.contains("for-mobile")){
            if ( !e.deltaY ) return;
            let scrollDirection = (e.deltaY > 0) ? 1 : -1;
            let scrollLeft = Math.round(this.scrollLeft);
            let maxScrollLeft = Math.round( this.scrollWidth - this.clientWidth );
            // this.scrollLeft += e.deltaY;
            this.scrollLeft += scrollSpeed * scrollDirection;
            if( 
                (scrollDirection === -1  && scrollLeft > 0) ||
                (scrollDirection === 1 && scrollLeft < maxScrollLeft ) 
              ) e.preventDefault()
            // console.log(Math.round(this.scrollLeft) + "; " + maxScrollLeft);
        } 
    }

    function addScrollHandler(item){
        item.addEventListener("wheel", ScrollH, false);
        item.addEventListener("DOMMouseScroll", ScrollH, false);
    }
    document.querySelectorAll(".scrollable").forEach(addScrollHandler);
}

function ShowSpec(){
    var nodeList_showspec = document.getElementsByClassName("show-spec");
    var nodeList_hidespec = document.querySelectorAll(".product .pop-up-close-btn")
    var price_overlay = document.getElementById("price-overlay");
    if (price_overlay){
        for (let i=0; i<nodeList_showspec.length; i++){
            nodeList_showspec[i].onclick = function() {
                price_overlay.style.display = "block";
            }
        }

        for (let i=0; i<nodeList_hidespec.length; i++){
            nodeList_hidespec[i].onclick = function() {
                price_overlay.style.display = "none";
            }
        }

        price_overlay.onclick = function(){
            price_overlay.style.display = "none";
        }
    }
    
}


document.addEventListener("DOMContentLoaded", function() {
    CustomScroll();
    ShowSpec();
}); 



