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
});


function openNav() {
    document.getElementById("mySidenav").style.width = "90%";
    // document.getElementById("mySidenav").style.left = "0px";
    document.getElementById("body").style.overflow = "hidden";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    // document.getElementById("mySidenav").style.left = "-34px";
    document.getElementById("body").style.overflow = "overlay";
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
                
    })
}

}


// let image = document.querySelector('.image');
// image.style.backgroundImage = "url('" + img.src + "')";
// image.addEventListener('mousemove', function (e) {
  
//  let width = image.offsetWidth;
//  let height = image.offsetHeight;
//  let mouseX = e.offsetX;
//  let mouseY = e.offsetY;
// console.log(mouseX + "" + mouseY)
//  let bgPosX = (mouseX / width * 100);
//  let bgPosY = (mouseY / height * 100);

//  image.style.setPosition = `${bgPosX}% ${bgPosY}%`;
// });

// image.addEventListener('mouseleave', function () {
//  image.style.backgroundPosition = "center";
// });
