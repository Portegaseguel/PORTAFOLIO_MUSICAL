document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.navbar ul li a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.navbar ul li a.active')?.classList.remove('active');
            link.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const businessName = document.getElementById('businessName');
    const text = businessName.textContent;
    businessName.innerHTML = '';

    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.1}s`;
        businessName.appendChild(span);
    }
});

$(document).ready(function(){
    $('.photo-gallery').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Muestra solo una imagen a la vez
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
