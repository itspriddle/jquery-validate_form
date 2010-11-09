/**
 * jQuery Validate Form
 *
 * @author      Joshua Priddle <jpriddle@nevercraft.net>
 * @url         http://github.com/itspriddle/jquery-validate_form
 */

(function($) {
  $.fn.validateForm = function(options) {

    options = $.extend({
      parent_el:      'div.form-row',
      error_class:    'error',
      validate_class: 'validate'
    });

    function toggleError(el) {
      var p = el.closest(parent_el);
      var e = p.hasClass(error_class);
      p[e ? 'removeClass' : 'addClass'](error_class);
    }

    function isSet(value) {
      typeof value !== 'undefined' && value !== '';
    }

    return this.each(function() {
      var self = $(this);

      self.submit(function() {
        var valid = true;
        self.find('.' + options.validate_class).each(function() {
          var el = $(this);
          valid = isSet(el.val());
          toggleError(el);
        });
        return valid;
      });
    });
  };
})(jQuery);

