$(function () {

    /* Nav menu */

    $("#navToggle").on("click", function (e) {
        e.preventDefault()

        $("#nav").toggleClass("show")
    })

    const worksSlider = $('[data-slider="slick"]')

    /* Slider: https://kenwheeler.github.io/slick/ */

    worksSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        infinite: true,
        autoplay: true,
        arrows: false,
        dots: true
      });

      $('.slickPrev').on("click", function (event) {
        event.preventDefault()

        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]')
        currentSlider.slick("slickPrev")
      })

      $('.slickNext').on("click", function (event) {
        event.preventDefault()
        let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]')
        currentSlider.slick("slickNext")
      })

    /* Modal */
    
    const modalCall = $("[data-modal]")
    const modalClose = $("[data-close]")

    modalCall.on("click", function (e) {
        e.preventDefault()
        let $this = $(this)
        let modalId = $this.data('modal')

        $(modalId).addClass('show')
        $("body").addClass('no-scroll')

        /* Animation dialog */

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0)"
            })
        }, 200)

        worksSlider.slick('setPosition')
    })

    modalClose.on("click", function (e) {
        e.preventDefault()
        let $this = $(this)
        let modalParent = $this.parents('.modal')

        modalParent.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        })

        setTimeout(function () {
            modalParent.removeClass('show')
            $("body").removeClass('no-scroll')
        }, 200)
    })

    $('.modal').on("click", function (e) {
        let $this = $(this)

        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        })

        setTimeout(function () {
            $this.removeClass('show')
            $("body").removeClass('no-scroll')
        }, 200)
    })

    $('.modal__dialog').on("click", function (e) {
        e.stopPropagation()
    })

    /* Filter */

    let filter = $("[data-filter]")

    filter.on('click', function (e) {
        e.preventDefault()

        let category = $(this).data('filter')

        if (category === 'all') {
            $("[data-cat]").removeClass('hide')
        } else {
            $("[data-cat]").each(function () {

                let workCategory = $(this).data('cat')

                if (workCategory !== category) {
                    $(this).addClass('hide')
                } else {
                    $(this).removeClass('hide')
                }
            }) 
        }
    })
})