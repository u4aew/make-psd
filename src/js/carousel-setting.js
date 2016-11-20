$(document).ready(function () {

    var owl = $("#owl-demo");

    owl.owlCarousel({
        pagination: false,
        paginationNumbers: false,
        items: 14,
        itemsDesktop: [1000, 14],
        itemsDesktopSmall: [900, 14],
        itemsTablet: [600, 14],
        itemsMobile: [600, 14]
    });

    // Custom Navigation Events
    $(".next-brand").click(function () {
        owl.trigger('owl.next');
    })
    $(".prev-brand").click(function () {
        owl.trigger('owl.prev');
    })
});