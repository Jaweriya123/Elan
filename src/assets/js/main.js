$(document).ready(function () {
    $("#owl-demo").owlCarousel({

        loop: true,
        responsiveClass: true,
        dots: true,
        dotsEach: true,
        autoplay: true,
        smartSpeed: 1000,

        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }

    })
    $("#compagn-banner-slider").owlCarousel({

        loop: true,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }

    })
    $("#mobile-slider").owlCarousel({

        loop: true,
        responsiveClass: true,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            }
        }

    })
    $("#product-slider").owlCarousel({

        loop: true,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }

    });
        // $('#produto').zoom();
});

//first template

// function openNav() {
//     document.getElementById("mySidenav").style.width = "80%";
// }
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
// }


//first main nav
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
// 2nd nav
function opendrop(){   
    document.getElementById("mydrop").style.width = "87%";
    document.getElementById("mydrop").style.opacity = "1";  
}
function closedrop(){
    document.getElementById("mydrop").style.width = "0";
}
//3rd nav
function opendrop2(){   
    document.getElementById("mydrop2").style.width = "87%";
    document.getElementById("mydrop2").style.opacity = "1";
}
function closedrop2(){
    document.getElementById("mydrop2").style.width = "0";
}

//4th nav
function opendrop3(){   
    document.getElementById("mydrop3").style.width = "87%";
    document.getElementById("mydrop3").style.opacity = "1";
}
function closedrop3(){
    document.getElementById("mydrop3").style.width = "0";
}


function myFunction(imgs) {
    let thumbnails = document.getElementsByClassName('thumbnail');
    let activeImages = document.getElementsByClassName('active');
    for (var i=0; i < thumbnails.length; i++){
        thumbnails[i].addEventListener('click', function(){
				if (activeImages.length > 0){
					activeImages[0].classList.remove('active')
                }
                this.classList.add('active')

                document.getElementById('expandedImg').src = this.src;
                document.getElementsByClassName('.zoomImg').src = this.src;
                
    })
}

}
