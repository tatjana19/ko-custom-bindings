/**
 * Binding for the jquery plugin 'strength.js'(http://jquerycards.com/forms/inputs/strength-js/), so if you want to use this binding you have to include the required js files for this
 * jquery plugin.
 **/
 ko.bindingHandlers.strength = { 
	init: function(element, valueAccessor) { 
		var options = valueAccessor() || {}; 
		$(element).strength(options); 
	} 
};
