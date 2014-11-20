/**
 * Twitter Bootstrapのnavbar-fixed-topの下側に張り付くようにする
 * background-colorが指定されていないとスクロールすると背景に混ざるので注意
 */
(function($) {
    $.fn.fixedTopChild = function() {
        var $navbar = $('.navbar-fixed-top');
        var $body = $('body');
        
        if($navbar[0]) {
            var $this = $(this);
            var navbar_height = parseInt($navbar.height(), 10);
            var navbar_margin_bottom = parseInt($navbar.css('margin-bottom'), 10);
            var this_height = parseInt($this.height(), 10);

            $navbar.css('margin-bottom', 0);
            $this.css({
                'display': 'block',
                'position': 'fixed',
                'left': 0,
                'right': 0,
                'z-index': 1030,
                'top': navbar_height + 'px',
                'margin-bottom': navbar_margin_bottom + 'px'
            });
            $body.css('padding-top', '+=' + this_height + 'px');
        }

        return this;
    };
})(jQuery);
