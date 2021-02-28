(function ($) {
    $(function () {
        $('.sidenav').sidenav();

        $('.anchor-self-close').on('click', function () {
            $('.sidenav').sidenav('close');
        });

        $('.scrollspy').scrollSpy();
    });
})(jQuery);