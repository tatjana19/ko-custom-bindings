/**
 * Binding for the jquery plugin 'Progression.js', so if you want to use this binding you have to include the required js files for this
 * jquery plugin.
 **/
 ko.bindingHandlers.progression = { 
	init: function(element, valueAccessor) { 
			var options = valueAccessor() || {}; 
			$(element).progression(options); 
		  } 
};
