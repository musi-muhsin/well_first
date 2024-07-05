 
   
   
   // anouncement bar swiper 

    $(function(){
      var mySwiper = new Swiper ('.swiper-container', {
        // autoplay: true,
        spaceBetween: 0,
        slidesPerView: 'auto',
        speed: 7000,
        loop: true,
        allowTouchMove: false,
        autoplay: {
          delay: 1,
          disableOnInteraction: false
        }
      });
      
    });
    
    
// sticky header 
var header = document.querySelector('.header');
onScroll = () => {
var scrolledPage = Math.round(window.pageYOffset);
if(scrolledPage > 60) {
header.classList.add('sticky');
} else {
header.classList.remove('sticky');
}
}
document.addEventListener('scroll', onScroll);

// mobile humburger 
var navMenu = document.querySelector('.left');

function openMobileMenu() {
    if (navMenu.classList.contains('d-block')) {
        navMenu.style.opacity = '0';
        setTimeout(function() {
            navMenu.classList.remove('d-block');
            navMenu.style.visibility = 'hidden';
        }, 500); // match the duration of the transition
    } else {
        // navMenu.style.display = 'block';
        setTimeout(function() {
            navMenu.classList.add('d-block');
            navMenu.style.visibility = 'visible';
            navMenu.style.opacity = '1';
        }, 10); // small delay to ensure the class is applied before starting the transition
    }
}

// accordion faq
const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
    
     // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
       currentlyActiveAccordionItemHeader.classList.toggle("active");
       currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
     }

     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
    
   });
});

// scroll to top

window.onscroll = () => {
  toggleTopButton();
}
function scrollToTop(){
  window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20) {
    document.getElementById('back-to-up').classList.remove('d-none');
  } else {
    document.getElementById('back-to-up').classList.add('d-none');
  }
}

// product -image slider
let thumbnails = document.getElementsByClassName('thumbnail')

		let activeImages = document.getElementsByClassName('active')

		for (var i=0; i < thumbnails.length; i++){

			thumbnails[i].addEventListener('mouseover', function(){
				console.log(activeImages)
				
				if (activeImages.length > 0){
					activeImages[0].classList.remove('active')
				}

				this.classList.add('active')
				document.getElementById('featured').src = this.src
			})
		}

		let buttonRight = document.getElementById('slideRight');
		let buttonLeft = document.getElementById('slideLeft');

		buttonLeft.addEventListener('click', function(){
			document.getElementById('slider').scrollLeft -= 180
		})

		buttonRight.addEventListener('click', function(){
			document.getElementById('slider').scrollLeft += 180
		})


