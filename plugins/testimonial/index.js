$(document).ready(function () {

    console.log("itemz", $('.items').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
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
    }));


    document.getElementById('testi-prev').addEventListener("click", () => {
        console.log("Prev clicked");
        $('.slick-prev').click()
    })


    document.getElementById('testi-next').addEventListener("click", () => {
        console.log("Prev clicked");
        $('.slick-next').click()
    })

});