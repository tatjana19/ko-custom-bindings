ko.bindingHandlers.skipBinding = {
    init: function() {
        return { controlsDescendantBindings: true };
    }
}
ko.virtualElements.allowedBindings.skipBinding = true;
