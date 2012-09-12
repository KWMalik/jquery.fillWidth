/**
 * fillWidth-Plugin
 *
 * Give elements width="100%" but maintain aspect ratio
 *
 * Author: Nils "@nerdismus" Riedemann <nils.riedemann@gmail.com>
 */
(function($, window) {
  var elements;

  $.fn.fillWidth = function(options) {
    elements = this;

    options = $.extend({}, $.fn.fillWidth.options, options);

    // store ratio in the data-attribute of the element
    this.each(function() {
      $(this)
        .data('ratio', this.height/this.width)
        .removeAttr('height')
        .removeAttr('width')
      ;
    })

    $(window).bind('resize', function() {
      $(elements).each(function() {
        var $element = $(this)
          , newWidth = $element.parent().width()
        ;

        $(this)
          .width(newWidth)
          .height(newWidth * $element.data('ratio'))
        ;
      })
    }).resize();

    return this;
  }
})(jQuery, window)
