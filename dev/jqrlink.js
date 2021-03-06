/**
 * Description: jQuery QR picture generator.
 * Author: ant777
 * Date: 26.06.13
 * Time: 11:17
 * http://stackoverflow.com/questions/2432764/how-to-change-a-remote-repository-uri-using-git
 */
(function( $ ) {

    $.fn.jqrlink = function( options ) {

        var $elf = this;
        if( $elf.length > 1 ){
            return $elf.each(function() {
                $(this).jqrlink ( options )
            })

        }
        console.log(this)
        var defaults = {
            display:    'hover',    // always | click |onButton
            fx:         'fade',     // flip | none | zoom
            nostyle:    false,       //true
            provider: {
                restUrl: "https://chart.googleapis.com/chart?"
            }

        };
        // Build main options before element iteration.
        var opts = $.extend( {}, defaults, options );

        var jqr = (function(){

            var wrap, qr;

            function bindEvt( evt){

                switch(evt){
                    case 'hover':
                        qr.css({
                            position: 'absolute',
                            bottom: '100%',
                            left: '100%',
                            borderLeft: '1px solid #ddd',
                            borderBottom: '1px solid #ddd'
                        }).hide();
                        wrap
                            .css({
                                display: 'inline-block',
                                position: 'relative'
                            })
                        $elf
                            .on('mouseenter', function(){
                                qr.show();
                                wrap.css({
                                    borderRight: '1px solid #ddd',
                                    borderTop: '1px solid #ddd'
                                })
                            })
                            .on('mouseleave', function(){
                                qr.hide();
                                wrap
                                    .css({
                                        borderRight: '1px solid transparent',
                                        borderTop: '1px solid  transparent'
                                    })
                            })
                }
            }

            return {
                init: function(){
                    wrap = $elf.wrap('<div/>').parent();
                    console.log($elf[0].href);
                    qr = $('<img src="https://chart.googleapis.com/chart?cht=qr&chs=100x100&chl='+$elf[0].href+'"/>').appendTo(wrap);
                    bindEvt( opts.display )
                }


            }
        }());
        jqr.init();
        return $elf;
    };





}( jQuery ));

