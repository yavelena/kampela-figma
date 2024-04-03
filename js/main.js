function FishScroll(){
    var kambala_bottom = document.getElementById('kambala-screen');
    var kambala = document.getElementById('fixed-fish');
    document.addEventListener("scroll", function(){
        kambala.style.position = (kambala_bottom.getBoundingClientRect().top <= 0)? 'absolute' : 'fixed';
        // console.log(kambala_bottom.getBoundingClientRect().top + ' ' + kambala.getBoundingClientRect().top);
      });
}


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
                price_overlay.style.visibility = "visible";
            }
        }

        for (let i=0; i<nodeList_hidespec.length; i++){
            nodeList_hidespec[i].onclick = function() {
                price_overlay.style.visibility = "hidden";
            }
        }

        price_overlay.onclick = function(){
            price_overlay.style.visibility = "hidden";
        }
    }
}




function PageNav(){
    
    var pages = document.querySelectorAll(".pages-nav menu li");
    var page_bodies = document.getElementsByClassName("page-content");
    var max_page = pages.length;
    

    function PageActivate(page_number){
        for (j = 0; j < pages.length; j++) {
            pages[j].classList.remove("active-page");
        }
        for (i = 0; i < page_bodies.length; i++) {
            page_bodies[i].classList.remove("active");
        }
        page_bodies[page_number-1].classList.add("active");
        pages[page_number-1].classList.add("active-page");
    }
    
    function TxtToPageNum(txt){
        return Number(txt.replace(/\D/g,''));
    }

    function GetActivePageNumber(){
        var active_page = document.querySelectorAll('.pages-nav .active-page')[0];
        if (active_page){
            return TxtToPageNum(active_page.innerText);
        } else return 0;
    }

    function PageClick(e){
        var page_num = TxtToPageNum(e.target.innerText);
        if (!page_num) page_num = 1;
        PageActivate(page_num);
    }

    

    function PreviousPage(){
        var curr_page = GetActivePageNumber();
        next_page = (curr_page > 1) ? curr_page - 1 : max_page;
        PageActivate(next_page);
    }

    function NextPage(){
        var curr_page = GetActivePageNumber();
        next_page = (curr_page < max_page) ? curr_page + 1 : 1;
        PageActivate(next_page);
    }

    function addPageClickHandler(item){
        item.addEventListener("click", PageClick, false);
    }
    document.querySelectorAll(".pages-nav menu li").forEach(addPageClickHandler);
    document.getElementById("previous-page").addEventListener("click", PreviousPage);
    document.getElementById("next-page").addEventListener("click", NextPage);
}

document.addEventListener("DOMContentLoaded", function() {
    FishScroll();
    CustomScroll();
    ShowSpec();
    PageNav();
}); 



