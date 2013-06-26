/**
 * Description: jQuery QR picture generator.
 * Author: ant777
 * Date: 26.06.13
 * Time: 11:17
 */
(function( $ ) {

    $.fn.jqrlink = function( options ) {

        var defaults = {

        };
        // Build main options before element iteration.
        var opts = $.extend( {}, defaults, options );

        return this.each(function() {
            var $elf = $(this);
            var p = $elf.wrap('<div/>').parent();
            console.log($elf[0].href)
            p.append('<img src="https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl='+$elf[0].href+'"/>');
        });
    };



}( jQuery ));

