/**
 * Tell Knockout to Skip Binding.
 * @see http://www.knockmeout.net/2012/05/quick-tip-skip-binding.html
 **/
 ko.bindingHandlers.skipBinding = {
    init: function() {
        return { controlsDescendantBindings: true };
    }
}
ko.virtualElements.allowedBindings.skipBinding = true;
